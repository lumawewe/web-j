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
			title: 'Agência Mav',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: 'Agência Mav - Creative Solutions' },
			],
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
			]
		},
	},
	build: {
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.plugins.push(new webpack.DefinePlugin({
					'process.env': {
						BUILD_DATE: JSON.stringify(new Date().toISOString())
					}
				}))
			}
		}
	}
})
