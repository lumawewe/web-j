<template>
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
</template>

<script setup>
import { ref } from 'vue'
import ImageLightbox from '@/components/ImageLightbox.vue'

defineProps({
	images: {
		type: Array,
		default: () => []
	}
})
</script>