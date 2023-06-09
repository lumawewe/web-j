<template>
	<figure class="w-full h-full rounded-lg shadow-md cursor-pointer border-gray-400/25 border">
		<a @click.prevent="openImage"
		class=""
			href="#">
			<img :src="thumbUrl"
				alt=""
				srcset="" class="w-full h-full object-cover object-top rounded-lg ">
		</a>

		<vue-easy-lightbox :visible="visibleRef"
			:imgs="imgsRef"
			:index="indexRef"
			@hide="onHide"></vue-easy-lightbox>
	</figure>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import { ref, defineComponent } from 'vue'

export default defineComponent({
	components: {
		VueEasyLightbox
	},
	props: {
		thumbUrl: {
			type: String,
			default: ''
		},
		imageList: {
			type: Array,
			default: () => []
		},
		startIndex: {
			type: Number,
			default: 0
		}
	},
	setup(props) {
		const visibleRef = ref(false)
		const indexRef = ref(0) // default 0
		const imgsRef = ref(props.imageList)
		const onShow = () => {
			visibleRef.value = true
		}
		const openImage = () => {
			imgsRef.value = props.imageList
			indexRef.value = props.startIndex // Use the startIndex prop
			onShow()
		}
		const onHide = () => (visibleRef.value = false)

		return {
			visibleRef,
			indexRef,
			imgsRef,
			openImage,
			onHide
		}
	}
})
</script>
