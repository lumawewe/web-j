<template>
	<NuxtLayout>
		<div class="relative isolate overflow-hidden bg-black pt-20 sm:pt-28 pb-16 -z-10">
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
					<h2 class="text-5xl font-bold tracking-tight text-white sm:text-6xl">{{ data.title }}</h2>
					<p class="mt-2 text-lg leading-8 text-gray-300">{{ data.author.name }} • {{ formatDate(data.date, 'pt-BR') }} • {{ data.category?.title }}</p>
				</div>
			</div>
		</div>

		<div class="mx-auto max-w-7xl flex flex-row justify-center items-stretch z-10 overflow-visible">
			<div class="w-auto flex-0 self-stretch flex-1 h-full hidden lg:flex min-h-full sticky top-0 items-start px-8 py-10">
				<nuxt-link to="/blog"
					class="hidden lg:flex items-center lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 flex-row gap-2">
					<ArrowLongLeftIcon class="h-5 w-5 text-gray-500"
						aria-hidden="true" />
					Voltar
				</nuxt-link>
			</div>

			<article class="prose prose-img:rounded-md prose-img:shadow-lg prose-headings:font-black prose-a:text-sky-700 prose-a:no-underline mx-auto w-full max-w-3xl pb-24 px-6 lg:px-8 -mt-12"
				:class="{
					'-mt-4 bg-white rounded-t-md': !data.image,
					'-mt-16 rounded-none': data.image,
				}">
				<section>
					<div class="flex items-start"
						v-if="data.image">
						<img :src="data.image"
							class="w-full h-auto max-h-96 object-cover"
							alt="{{ data.title }}" />
					</div>
				</section>

				<ContentDoc class="leading-normal" />

				<section class="mt-10">
					<hr>
					<div class="flex items-start">
						<img :src="data.author.image"
							class="w-12 h-12 rounded-full my-1" />
						<small class="ml-4">
							<h3 class="text-xl m-0 mb-1 font-semibold">{{ data.author.name }}</h3>
							<p class="text-gray-500 max-w-sm leading-tight">{{ data.author.description }}</p>
						</small>
					</div>
				</section>
			</article>
			<div class="w-auto flex-0 self-stretch flex-1 h-full hidden lg:flex min-h-full sticky top-0 items-start px-8 py-12"></div>
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