const cities = [
	{
		id: 1,
		name: '北京',
		x: 65,
		y: 28,
		photo: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800',
		visitTime: '2019年5月',
		companions: '全家',
		description:
			'游览了故宫、长城、天坛等著名景点。在故宫里感受到了深厚的历史文化底蕴，长城的雄伟壮观让人震撼。还品尝了北京烤鸭，味道非常美味。',
		photoCount: 256,
		days: 8
	},
	{
		id: 2,
		name: '上海',
		x: 72,
		y: 45,
		photo: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=800',
		visitTime: '2018年8月',
		companions: '全家',
		description:
			'外滩的夜景美不胜收，东方明珠塔高耸入云。在南京路步行街购物，品尝了小笼包等上海特色美食。迪士尼乐园玩了一整天，非常开心。',
		photoCount: 189,
		days: 5
	},
	{
		id: 3,
		name: '西安',
		x: 55,
		y: 48,
		photo: 'https://images.unsplash.com/photo-1518182170546-0766ba6f4a88?w=800',
		visitTime: '2020年10月',
		companions: '全家',
		description:
			'兵马俑的壮观让人叹为观止，古城墙骑行体验很好。回民街的小吃种类繁多，肉夹馍、羊肉泡馍都很好吃。大雁塔夜景也很美。',
		photoCount: 167,
		days: 4
	},
	{
		id: 4,
		name: '成都',
		x: 48,
		y: 58,
		photo: 'https://images.unsplash.com/photo-1596395819057-3a8b5c1a5f3c?w=800',
		visitTime: '2021年3月',
		companions: '全家',
		description:
			'大熊猫基地看到了可爱的大熊猫，春熙路购物很方便。锦里古街很有特色，火锅和串串香非常好吃。宽窄巷子的建筑很有韵味。',
		photoCount: 198,
		days: 5
	},
	{
		id: 5,
		name: '杭州',
		x: 70,
		y: 52,
		photo: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=800',
		visitTime: '2019年9月',
		companions: '全家',
		description:
			'西湖的美景如诗如画，雷峰塔、断桥、三潭印月都很有名。龙井茶园品茶，灵隐寺祈福。宋城千古情演出非常精彩。',
		photoCount: 145,
		days: 3
	},
	{
		id: 6,
		name: '广州',
		x: 62,
		y: 78,
		photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
		visitTime: '2020年1月',
		companions: '全家',
		description:
			'广州塔的夜景很美，珠江夜游很惬意。早茶文化体验很好，点心种类丰富。长隆野生动物世界看到了很多珍稀动物。',
		photoCount: 178,
		days: 4
	},
	{
		id: 7,
		name: '深圳',
		x: 68,
		y: 80,
		photo: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
		visitTime: '2022年6月',
		companions: '全家',
		description:
			'世界之窗、欢乐谷主题公园很好玩。深圳湾公园散步很舒服，大梅沙海滨公园游泳。科技感十足的城市，发展很快。',
		photoCount: 134,
		days: 3
	},
	{
		id: 8,
		name: '重庆',
		x: 52,
		y: 62,
		photo: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
		visitTime: '2021年7月',
		companions: '全家',
		description:
			'洪崖洞的夜景像千与千寻的场景，解放碑步行街很热闹。长江索道体验很好，火锅非常辣但很好吃。山城的特色很明显。',
		photoCount: 156,
		days: 4
	},
	{
		id: 9,
		name: '武汉',
		x: 62,
		y: 55,
		photo: 'https://images.unsplash.com/photo-1548685913-fe6678b4d4c6?w=800',
		visitTime: '2020年5月',
		companions: '全家',
		description:
			'黄鹤楼历史悠久，东湖风景优美。户部巷小吃很多，热干面很好吃。武汉大学樱花季很美，虽然这次没赶上。',
		photoCount: 123,
		days: 3
	},
	{
		id: 10,
		name: '南京',
		x: 70,
		y: 48,
		photo: 'https://images.unsplash.com/photo-1548268770-66184a21657e?w=800',
		visitTime: '2018年11月',
		companions: '全家',
		description:
			'中山陵庄严肃穆，明孝陵风景优美。夫子庙秦淮河夜景很美，鸭血粉丝汤和小笼包很好吃。总统府了解历史。',
		photoCount: 112,
		days: 3
	},
	{
		id: 11,
		name: '厦门',
		x: 68,
		y: 70,
		photo: 'https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?w=800',
		visitTime: '2019年4月',
		companions: '全家',
		description:
			'鼓浪屿的小资情调很浓，建筑很有特色。环岛路骑行很舒服，沙坡尾文艺气息浓厚。海鲜大餐非常新鲜美味。',
		photoCount: 98,
		days: 3
	},
	{
		id: 12,
		name: '三亚',
		x: 58,
		y: 88,
		photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
		visitTime: '2023年2月',
		companions: '全家',
		description:
			'亚龙湾海水清澈，沙滩细腻。天涯海角打卡，南山寺祈福。热带天堂森林公园风景优美，海鲜大餐非常新鲜。',
		photoCount: 167,
		days: 5
	}
]

let currentSlide = 0
let isMuted = false
let selectedCity = null

function init() {
	loadSettings()
	setupInkParticles()
	setupIntroAnimation()
	setupThemeToggle()
	setupMusicControl()
	setupMap()
	animateStats()
	setupTimeline()
}

function loadSettings() {
	const savedTheme = localStorage.getItem('theme')
	const savedMuted = localStorage.getItem('muted')

	if (savedTheme) {
		document.documentElement.setAttribute('data-theme', savedTheme)
	} else if (
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches
	) {
		document.documentElement.setAttribute('data-theme', 'dark')
	}

	if (savedMuted === 'true') {
		isMuted = true
		document.getElementById('music-toggle').classList.add('muted')
	}
}

function saveSettings() {
	const theme = document.documentElement.getAttribute('data-theme')
	localStorage.setItem('theme', theme || 'light')
	localStorage.setItem('muted', isMuted)
}

function setupInkParticles() {
	const canvas = document.getElementById('ink-canvas')
	if (!canvas) return

	const particles = []
	const maxParticles = 30

	function createParticle() {
		return {
			x: Math.random() * 100,
			y: Math.random() * 100,
			size: Math.random() * 120 + 40,
			opacity: Math.random() * 0.03 + 0.01,
			speed: Math.random() * 0.02 + 0.005,
			angle: Math.random() * Math.PI * 2,
			rotSpeed: (Math.random() - 0.5) * 0.002
		}
	}

	for (let i = 0; i < maxParticles; i++) {
		particles.push(createParticle())
	}

	function renderParticles() {
		const isDark =
			document.documentElement.getAttribute('data-theme') === 'dark'
		const baseColor = isDark ? '232, 224, 208' : '26, 26, 26'

		canvas.innerHTML = ''
		particles.forEach((p) => {
			p.x += Math.cos(p.angle) * p.speed
			p.y += Math.sin(p.angle) * p.speed
			p.angle += p.rotSpeed

			if (p.x < -10) p.x = 110
			if (p.x > 110) p.x = -10
			if (p.y < -10) p.y = 110
			if (p.y > 110) p.y = -10

			const el = document.createElement('div')
			el.style.cssText = `
				position:absolute;
				left:${p.x}%;
				top:${p.y}%;
				width:${p.size}px;
				height:${p.size}px;
				border-radius:50%;
				background:radial-gradient(circle, rgba(${baseColor},${p.opacity}) 0%, transparent 70%);
				transform:translate(-50%,-50%);
				pointer-events:none;
			`
			canvas.appendChild(el)
		})

		if (
			!document.getElementById('intro-overlay').classList.contains('hidden')
		) {
			requestAnimationFrame(renderParticles)
		}
	}

	renderParticles()
}

function setupIntroAnimation() {
	const overlay = document.getElementById('intro-overlay')
	const slides = document.querySelectorAll('.intro-slide')
	const indicators = document.querySelectorAll('.indicator')
	const enterBtn = document.getElementById('enter-btn')
	const mainContent = document.getElementById('main-content')

	function showSlide(index) {
		slides.forEach((slide, i) => {
			slide.classList.remove('active')
			indicators[i].classList.remove('active')
		})
		slides[index].classList.add('active')
		indicators[index].classList.add('active')

		const valueElement = slides[index].querySelector('.slide-value')
		const target = parseInt(valueElement.getAttribute('data-target'))
		animateValue(valueElement, 0, target, 1500)
	}

	function nextSlide() {
		if (currentSlide === 0) {
			playMusic()
		}
		if (currentSlide < slides.length - 1) {
			currentSlide++
			showSlide(currentSlide)
		} else {
			enterBtn.classList.add('visible')
		}
	}

	overlay.addEventListener('click', (e) => {
		if (e.target.closest('.global-controls')) return
		if (
			e.target === overlay ||
			e.target.closest('.intro-slide') ||
			e.target.closest('.slide-hint') ||
			e.target.closest('.intro-content')
		) {
			if (!e.target.closest('.enter-btn')) {
				nextSlide()
			}
		}
	})

	enterBtn.addEventListener('click', (e) => {
		e.stopPropagation()
		overlay.classList.add('hidden')
		mainContent.classList.add('visible')
		playMusic()
	})

	showSlide(0)
}

function animateValue(element, start, end, duration) {
	const startTime = performance.now()
	const diff = end - start

	function update(currentTime) {
		const elapsed = currentTime - startTime
		const progress = Math.min(elapsed / duration, 1)
		const easeProgress = 1 - Math.pow(1 - progress, 4)
		const current = Math.floor(start + diff * easeProgress)
		element.textContent = current

		if (progress < 1) {
			requestAnimationFrame(update)
		}
	}

	requestAnimationFrame(update)
}

function setupThemeToggle() {
	const themeToggle = document.getElementById('theme-toggle')

	themeToggle.addEventListener('click', () => {
		const currentTheme = document.documentElement.getAttribute('data-theme')
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
		document.documentElement.setAttribute('data-theme', newTheme)
		saveSettings()
	})
}

function setupMusicControl() {
	const musicToggle = document.getElementById('music-toggle')
	const bgMusic = document.getElementById('bg-music')

	bgMusic.volume = 0.3

	musicToggle.addEventListener('click', () => {
		if (isMuted) {
			bgMusic.play()
			isMuted = false
			musicToggle.classList.remove('muted')
		} else {
			bgMusic.pause()
			isMuted = true
			musicToggle.classList.add('muted')
		}
		saveSettings()
	})
}

function playMusic() {
	if (!isMuted) {
		const bgMusic = document.getElementById('bg-music')
		bgMusic.play().catch(() => {})
	}
}

function setupMap() {
	const mapMarkers = document.getElementById('map-markers')

	cities.forEach((city, index) => {
		const marker = document.createElement('div')
		marker.className = 'map-marker'
		marker.setAttribute('data-name', city.name)
		marker.style.left = `${city.x}%`
		marker.style.top = `${city.y}%`
		marker.style.animationDelay = `${index * 0.1}s`

		marker.addEventListener('click', () => {
			selectCity(city)
		})

		mapMarkers.appendChild(marker)
	})

	selectCity(cities[0])
}

function selectCity(city) {
	const markers = document.querySelectorAll('.map-marker')
	markers.forEach((marker) => {
		marker.classList.remove('active')
		if (marker.getAttribute('data-name') === city.name) {
			marker.classList.add('active')
		}
	})

	selectedCity = city

	const detailEmpty = document.getElementById('detail-empty')
	const detailContent = document.getElementById('detail-content')

	detailEmpty.style.display = 'none'
	detailContent.style.display = 'flex'

	document.getElementById('detail-image').src = city.photo
	document.getElementById('detail-name').textContent = city.name
	document.getElementById('detail-time').textContent = city.visitTime
	document.getElementById('detail-companions').textContent = city.companions
	document.getElementById('detail-description').textContent = city.description
	document.getElementById('detail-photos').textContent = city.photoCount

	detailContent.scrollTop = 0
}

function animateStats() {
	const statValues = document.querySelectorAll('.stat-value')

	statValues.forEach((element) => {
		const target = parseInt(element.getAttribute('data-target'))
		animateValue(element, 0, target, 1500)
	})
}

function setupTimeline() {
	const timeline = document.getElementById('timeline')

	const yearMap = {}
	cities.forEach((city) => {
		const year = city.visitTime.match(/\d{4}/)
		if (year) {
			const y = year[0]
			if (!yearMap[y]) yearMap[y] = []
			yearMap[y].push(city)
		}
	})

	const years = Object.keys(yearMap).sort((a, b) => b - a)

	years.forEach((year) => {
		const yearEl = document.createElement('div')
		yearEl.className = 'timeline-year'

		let html = `<div class="timeline-dot"></div>`
		html += `<div class="timeline-year-label">${year}</div>`
		html += `<div class="timeline-cities">`

		yearMap[year].forEach((city) => {
			html += `
				<div class="timeline-city" data-city-id="${city.id}">
					<div class="timeline-city-photo">
						<img src="${city.photo}" alt="${city.name}">
					</div>
					<div class="timeline-city-info">
						<div class="timeline-city-name">${city.name}</div>
						<div class="timeline-city-meta">${city.visitTime} · ${city.companions} · ${city.days}天</div>
					</div>
					<div class="timeline-city-count">${city.photoCount} 张照片</div>
				</div>
			`
		})

		html += `</div>`
		yearEl.innerHTML = html
		timeline.appendChild(yearEl)
	})

	timeline.querySelectorAll('.timeline-city').forEach((el) => {
		el.addEventListener('click', () => {
			const cityId = parseInt(el.getAttribute('data-city-id'))
			const city = cities.find((c) => c.id === cityId)
			if (city) selectCity(city)
		})
	})
}

document.addEventListener('DOMContentLoaded', init)
