import http.server
import json
import mimetypes
import os
import subprocess
import tempfile
import urllib.parse

BASE_DIR = '/Volumes/旅游相册'
PORT = 8001
CACHE_DIR = os.path.join(os.path.dirname(__file__), '.photo_cache')

os.makedirs(CACHE_DIR, exist_ok=True)


def convert_heic_to_jpeg(heic_path):
    basename = os.path.splitext(os.path.basename(heic_path))[0] + '.jpg'
    cache_path = os.path.join(CACHE_DIR, basename)

    if os.path.isfile(cache_path):
        src_mtime = os.path.getmtime(heic_path)
        dst_mtime = os.path.getmtime(cache_path)
        if dst_mtime >= src_mtime:
            return cache_path

    try:
        subprocess.run([
            'sips', '-s', 'format', 'jpeg',
            '-s', 'formatOptions', '85',
            heic_path,
            '--out', cache_path
        ], capture_output=True, timeout=30, check=True)
        return cache_path
    except Exception as e:
        print(f'[convert] failed: {heic_path} -> {e}')
        return None


class PhotoHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)

        if path == '/api/photos':
            city = query.get('city', [''])[0]
            if not city:
                self.send_json({'error': 'missing city param'}, 400)
                return

            city_dir = os.path.join(BASE_DIR, city)
            if not os.path.isdir(city_dir):
                self.send_json({'photos': [], 'error': f'directory not found: {city_dir}'})
                return

            exts = {'.jpg', '.jpeg', '.png', '.gif', '.heic', '.webp'}
            photos = sorted([
                f for f in os.listdir(city_dir)
                if os.path.splitext(f)[1].lower() in exts
            ])

            self.send_json({'photos': photos, 'base': f'/images/{city}/'})
            return

        if path.startswith('/images/'):
            rel = urllib.parse.unquote(path[len('/images/'):])
            file_path = os.path.join(BASE_DIR, rel)

            if not os.path.isfile(file_path):
                self.send_json({'error': 'file not found'}, 404)
                return

            ext = os.path.splitext(file_path)[1].lower()

            if ext == '.heic':
                jpeg_path = convert_heic_to_jpeg(file_path)
                if jpeg_path and os.path.isfile(jpeg_path):
                    self.serve_file(jpeg_path, 'image/jpeg')
                    return
                else:
                    self.send_json({'error': 'heic convert failed'}, 500)
                    return

            mime = mimetypes.guess_type(file_path)[0] or 'application/octet-stream'
            self.serve_file(file_path, mime)
            return

        self.send_json({'endpoints': {
            '/api/photos?city=三亚': 'list photos',
            '/images/三亚/xxx.JPG': 'serve photo'
        }})

    def serve_file(self, file_path, mime):
        size = os.path.getsize(file_path)
        self.send_response(200)
        self.send_header('Content-Type', mime)
        self.send_header('Content-Length', size)
        self.send_header('Cache-Control', 'public, max-age=86400')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()

        with open(file_path, 'rb') as f:
            while True:
                chunk = f.read(65536)
                if not chunk:
                    break
                self.wfile.write(chunk)

    def send_json(self, data, code=200):
        body = json.dumps(data, ensure_ascii=False, indent=2).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Content-Length', len(body))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, fmt, *args):
        print(f'[photo-api] {args[0]}')


if __name__ == '__main__':
    server = http.server.HTTPServer(('0.0.0.0', PORT), PhotoHandler)
    print(f'Photo API serving on http://localhost:{PORT}')
    print(f'Base directory: {BASE_DIR}')
    print(f'HEIC cache: {CACHE_DIR}')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\nShutting down...')
        server.server_close()
