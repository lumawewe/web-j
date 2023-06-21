<template>
	<NuxtLayout>
		<article class="prose mx-auto w-full max-w-4xl py-24 px-6 lg:px-8">
			<section class="mt-12">
				<div class="flex items-start">
					<h1 class="text-3xl font-bold">{{ data.title }}</h1>
					<small class="ml-4">
						<p class="text-gray-500 max-w-sm leading-tight">{{ formatDate(data.date, 'pt-BR') }}</p>
						<p class="text-gray-500 max-w-sm leading-tight">{{ data.author.name }}</p>
						<p class="text-gray-500 max-w-sm leading-tight">{{ data.category }}</p>
					</small>
				</div>
			</section>
			<section v-if="data.image"
				class="mt-12">
				<hr>
				<div class="flex items-start">
					<img :src="data.image"
						class="w-full h-auto"
						alt="{{ data.title }}" />
				</div>
			</section>
			<ContentDoc />
			<section class="mt-12">
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
	</NuxtLayout>
</template>

<script setup>
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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