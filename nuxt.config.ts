export default defineNuxtConfig({
	ssr: false,
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'pt'
			},
			title: 'Agência Mav',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: 'Agência Mav - Soluções criativas' },
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
			]
		},
	},
	runtimeConfig: {
		public: {
			baseURL: 'https://blog.agenciamav.com.br/wp-json', // just for blog
			buildDate: new Date().toISOString(),
		},
	},
	modules: ['nuxt-gtag'],
	gtag: {
		id: 'G-9XYNNPM7XY',
		config: {
			// send_page_view: false,
		},
	},
})