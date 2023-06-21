<template>
	<NuxtLayout>
	<div class="mx-auto max-w-7xl px-6 mb-16 lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 pb-24">
			<div class="lg:pr-8 lg:pt-4">
				<div class="lg:max-w-lg">
					<h2 class="text-base font-semibold leading-7 text-sky-600">Case: Prefeitura de Monte Belo do Sul - RS (2019-2021)</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Inovação e acesso à informação no setor público</p>
					<p class="mt-6 text-lg leading-8 text-gray-600">Em 2019, publicamos um novo <strong>website para a Prefeitura de Monte Belo do Sul, RS</strong>. O projeto resultou em uma gestão mais eficiente e um acesso mais fácil à informação para os cidadãos, além daquele visual encantador 😊.<br />O projeto foi mantido ativamente até o final de 2021.</p>
					<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
						<div v-for="feature in features"
							:key="feature.name"
							class="relative pl-9">
							<dt class="inline font-semibold text-gray-900">
								<component :is="feature.icon"
									class="absolute left-1 top-1 h-5 w-5 text-sky-600"
									aria-hidden="true" />
								{{ feature.name }}
							</dt>
							{{ ' ' }}
							<dd class="inline">{{ feature.description }}</dd>
						</div>
					</dl>
				</div>
			</div>
			<img src="~/assets/images/cases/PrefeituraMonteBeloDoSul/screenshot.png"
				alt="Product screenshot"
				class="w-[48rem] max-w-none rounded-xl shadow-lg ring-1 ring-gray-400/10 border-gray-400/25 border sm:w-[57rem] md:-ml-4 lg:-ml-0"
				width="2432"
				height="1442" />
		</div>

		<hr>

		<div class="mt-16">
			<ImageCarousel :images="images" />
		</div>
	</div>
	</NuxtLayout>
</template>

<script setup>
import { CloudIcon, ServerIcon, CalendarIcon, BellIcon, BookOpenIcon, BookmarkIcon, CodeBracketIcon, ArrowLongLeftIcon } from '@heroicons/vue/20/solid'
import ImageCarousel from '@/components/ImageCarousel.vue'

definePageMeta({
	layout: "cases",

});
const features = [
	{
		name: 'Tema WordPress exclusivo.',
		description:
			'Desenvolvemos um tema WordPress com os recursos específicos que o cliente precisava. Desenhamos uma aparência única e criamos uma experiência de usuário otimizada para o novo site da prefeitura.',
		icon: CodeBracketIcon,
	},
	// {
	// 	name: 'Infraestrutura Cloud.',
	// 	description:
	// 		'Implementamos uma robusta infraestrutura em nuvem com Cloudflare para garantir um tempo de atividade ininterrupto e segurança excepcional.',
	// 	icon: CloudIcon,
	// },
	// {
	// 	name: 'Backups Automáticos.',
	// 	description: 'Garantimos a segurança das informações municipais, implementando um sistema de backups automáticos que proporcionava tranquilidade para a gestão da prefeitura.',
	// 	icon: ServerIcon,
	// },
	{
		name: 'Gestão de Eventos.',
		description: 'Um sistema de gerenciamento de eventos integrado mantinha os cidadãos informados sobre os próximos eventos na cidade.',
		icon: CalendarIcon,
	},
	{
		name: 'Notificações para Inscritos.',
		description: 'O sistema de notificações mantinha os cidadãos inscritos atualizados sobre eventos e atualizações importantes.',
		icon: BellIcon,
	},
	{
		name: 'Publicações Legais.',
		description: 'Desenvolvemos um sistema de publicações legais para a prefeitura, tornando a gestão mais transparente e acessível para os cidadãos.',
		icon: BookOpenIcon,
	},
	{
		name: 'Pesquisa Avançada de Publicações.',
		description: 'Desenvolvemos uma ferramenta de pesquisa avançada para publicações legais, tornando a gestão municipal mais transparente.',
		icon: BookmarkIcon,
	},
]

const testimonials = [
	[
		[
			{
				body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
				author: {
					name: 'Leslie Alexander',
					handle: 'lesliealexander',
					imageUrl:
						'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			// More testimonials...
		],
		[
			{
				body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
				author: {
					name: 'Lindsay Walton',
					handle: 'lindsaywalton',
					imageUrl:
						'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			// More testimonials...
		],
	],
	[
		[
			{
				body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
				author: {
					name: 'Tom Cook',
					handle: 'tomcook',
					imageUrl:
						'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			// More testimonials...
		],
		[
			{
				body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
				author: {
					name: 'Leonard Krasner',
					handle: 'leonardkrasner',
					imageUrl:
						'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				},
			},
			// More testimonials...
		],
	],
]

const featuredTestimonial = {
	body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
	author: {
		name: 'Brenna Goyette',
		handle: 'brennagoyette',
		imageUrl:
			'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
		logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg',
	},
}

const images = [
	'/images/cases/PrefeituraMonteBeloDoSul/screenshot-002.jpg',
	'/images/cases/PrefeituraMonteBeloDoSul/screenshot-003.jpg',
	'/images/cases/PrefeituraMonteBeloDoSul/screenshot-004.jpg',
	'/images/cases/PrefeituraMonteBeloDoSul/screenshot-005.jpg',
	'/images/cases/PrefeituraMonteBeloDoSul/screenshot-006.jpg',
]
</script>
