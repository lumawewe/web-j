<template>
	<main class="isolate relative">
		<div class="mosaic-bg min-h-screen top-0 bottom-0 flex flex-col items-center justify-between bg-transparent shadow-inner absolute  -z-10">
			<AnimationContainer />
		</div>

		<SiteHeader />

		<div class="mx-auto max-w-7xl flex flex-row justify-center items-stretch">
			<div class="w-auto flex-0 self-stretch flex-1 h-full hidden lg:flex min-h-full sticky top-0 items-start px-8 py-12">
				<nuxt-link to="/blog"
					class="hidden lg:flex items-center lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 flex-row gap-2">
					<ArrowLongLeftIcon class="h-5 w-5 text-gray-500"
						aria-hidden="true" />
					Voltar
				</nuxt-link>
			</div>
			<slot />

			<div class="w-auto flex-0 self-stretch flex-1 h-full hidden lg:flex min-h-full sticky top-0 items-start px-8 py-12"></div>
		</div>

		<SiteFooter />
	</main>
</template>

<script setup>
import { ArrowLongLeftIcon } from '@heroicons/vue/24/outline'


</script>