<template>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
			<div class="lg:pr-8 lg:pt-4">
				<div class="lg:max-w-lg">
					<h2 class="text-base font-semibold leading-7 text-sky-600">Case: Spark</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contribuindo com a inovação da intralogística</p>
					<p class="mt-6 text-lg leading-8 text-gray-600">Pensado nos mínimos detalhes, o <strong>novo site da <a href="https://sparkag.com.br"
								target="_blank"
								title="Spark - Soluções Inovadoras em Intralogística">Spark</a></strong> foi desenvolvido sob medida em todos os aspectos.</p>
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
			<img src="/images/cases/Spark/screenshot.png"
				alt="Product screenshot"
				class="w-[48rem] max-w-none rounded-xl shadow-lg ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
				width="2432"
				height="1442" />
		</div>

		<div class="mt-16">
			<ImageCarousel :images="images" />
		</div>
	</div>
</template>

<script setup>
import { CloudIcon, ServerIcon, CalendarIcon, BellIcon, BookOpenIcon, BookmarkIcon, CodeBracketIcon } from '@heroicons/vue/20/solid'
import ImageCarousel from '@/components/ImageCarousel.vue'

definePageMeta({
	layout: "cases",
});

const features = [
	{
		name: 'Tema Exclusivo WordPress.',
		description:
			'Foi desenvolvido um tema WordPress exclusivo para a empresa, proporcionando uma aparência única e uma experiência de usuário otimizada para o novo site da Spark.',
		icon: CodeBracketIcon,
	},
]

const images = [
	'/images/cases/Spark/screenshot-002.jpg',
	// '/images/cases/Spark/screenshot-003.jpg',
	// '/images/cases/Spark/screenshot-004.jpg',
	'/images/cases/Spark/screenshot-005.jpg',
	'/images/cases/Spark/screenshot-006.jpg',
]
</script>
