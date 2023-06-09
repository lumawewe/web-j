<template>
	<div class="p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
		<div v-for="route in nestedRoutes"
			:key="route.path"
			class="rounded-lg shadow-md overflow-hidden">
			<div v-if="route.thumb"
				class="w-full h-48">
				<img :src="route.thumb"
					alt=""
					class="w-full h-full object-cover" />
			</div>
			<div class="p-6">
				<h2 class="text-xl font-semibold mb-2">
					<nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
				</h2>
				<p class="text-gray-500">{{ route.path }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nestedRoutes: []
		}
	},
	created() {
		this.$router.options.routes.forEach((routeOption) => {
			if (routeOption.path.startsWith(this.$route.path)) {
				this.nestedRoutes.push({
					name: routeOption.name,
					path: routeOption.path,
					thumb: routeOption.thumb || null
				})
			}
		})
	}
}
</script>
