<template>
	<div class="relative isolate z-0">
		<svg class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
			aria-hidden="true">
			<defs>
				<pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
					width="100"
					height="100"
					x="50%"
					y="-1"
					patternUnits="userSpaceOnUse">
					<path d="M.5 200V.5H200"
						fill="none" />
				</pattern>
			</defs>
			<svg x="50%"
				y="-1"
				class="overflow-visible fill-gray-50">
				<path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
					stroke-width="0" />
			</svg>
			<rect width="100%"
				height="100%"
				stroke-width="0"
				fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
		</svg>
		<div class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
			aria-hidden="true">
			<div class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
				style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)" />
		</div>

		<div class="overflow-hidden py-24 sm:py-32">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div class="lg:pr-8 lg:pt-4">
						<div class="lg:max-w-lg">
							<h2 class="text-base font-semibold leading-7 text-indigo-600">Case: Spark - Inovação em Intralogística</h2>
							<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contribuindo com Inovação na Intralogística</p>
							<p class="mt-6 text-lg leading-8 text-gray-600">Pensado nos mínimos detalhes, o <strong>novo site da Spark</strong> foi desenvolvido sob medida em todos os aspectos.</p>
							<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
								<div v-for="feature in features"
									:key="feature.name"
									class="relative pl-9">
									<dt class="inline font-semibold text-gray-900">
										<component :is="feature.icon"
											class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
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
					<h3 class="text-2xl font-bold mb-5">Confira algumas imagens do projeto</h3>
					<div class="flex space-x-4 overflow-x-auto overflow-y-visible">
						<div v-for="(image, index) in images"
							:id="`image-${index}`"
							:key="index"
							class="flex-shrink-0 w-64 h-48">

							<ImageLightbox :thumbUrl="image"
								:imageList="images"
								:startIndex="index"></ImageLightbox>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script setup>
import { CloudIcon, ServerIcon, CalendarIcon, BellIcon, BookOpenIcon, BookmarkIcon, CodeBracketIcon } from '@heroicons/vue/20/solid'

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
