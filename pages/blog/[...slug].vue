<template>
	<NuxtLayout>
		<div class="relative isolate overflow-hidden pt-20 sm:pt-28 pb-16 -z-10 bg-black" :class="{}">
			<img :src="data.image ?? '/img/background.jpg'"
				alt=""
				class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-25" />

			<div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
				<div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
			</div>
			<div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
				<div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
			</div>

			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl lg:mx-0">
					<h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl ">{{ data.title }}</h2>
					<p class="mt-2 text-sm md:text-md leading-8 text-gray-300">{{ data.author.name }} • {{ formatDate(data.date, 'pt-BR') }} • {{ data.category?.title }}</p>
				</div>
			</div>
		</div>

		<div class="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 z-10 md:px-8">
			<div class="col-span-1 md:col-span-2 h-full py-10 hidden md:flex">
				<nuxt-link to="/blog"
					class="sticky flex top-10 h-5 items-center text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 flex-row gap-2">
					<ArrowLongLeftIcon class="h-5 w-5 text-gray-500"
						aria-hidden="true" />
					Voltar
				</nuxt-link>
			</div>

			<div class="col-span-10 md:col-span-8">
				<article v-if="data"
					class="prose prose-sm lg:prose-lg xl:prose-xl prose-img:rounded-md prose-img:my-4 prose-img:shadow-lg prose-headings:font-black prose-a:text-sky-700 prose-a:no-underline mx-auto w-full max-w-none  pb-24 px-6 lg:px-8 -mt-12"
					:class="{
						'-mt-4 pt-6 bg-white rounded-t-md': !data.image,
						'-mt-12 rounded-t-md': data.image,
					}">
					<figure v-if="data.image" class="min-h-48 max-h-96 object-cover">
						<img 
							:src="data.image"
							class="w-full h-auto max-h-96 object-cover"
							alt="{{ data.title }}" />
					</figure>

					<ContentDoc class="leading-normal" />

					<section class="mt-10 prose prose-img:m-0 prose-headings:m-0">
						<hr>
						<div class="flex items-start">
							<img :src="data.author.image"
								class="w-12 h-auto rounded-full" />
							<small class="ml-4">
								<h3 class="text-xl m-0 mb-1 font-semibold">{{ data.author.name }}</h3>
								<p class="text-gray-500 max-w-sm leading-tight">{{ data.author.description }}</p>
							</small>
						</div>
					</section>
				</article>
			</div>

			<div class="col-span-1 md:col-span-2 h-full py-10 hidden md:flex"></div>
		</div>
	</NuxtLayout>
</template>

<script setup>
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowLongLeftIcon } from '@heroicons/vue/24/outline'

const formatDate = (date, locale) => {
	return format(new Date(date), 'dd/MM/yyyy', { locale: ptBR })
}

const route = useRoute();
const slug = route.params.slug[0]
definePageMeta({
	layout: "blog",
});
const { data } = await useAsyncData('data', () => queryContent('/blog/' + slug).findOne())
</script>

<style>
.prose-headings\:font-black :is(:where(h1, h2, h3, h4, h5, h6, th):not(:where([class~="not-prose"] *))) a {
	font-weight: 900;
}
</style>