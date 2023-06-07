<template>
	<div class="mosaic-bg min-h-screen w-full top-0 bottom-0 flex flex-col items-center justify-between bg-transparent shadow-inner absolute bg-white -z-10">
		<AnimationContainer />

		<div class="logo h-full flex items-center p-4">
			<img src="/img/logo_dark.svg" alt="Logo" class="h-7"/>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: false,
});
</script>