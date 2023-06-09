<template>
	<main class="isolate relative">
		<div class="mosaic-bg min-h-screen top-0 bottom-0 flex flex-col items-center justify-between bg-transparent shadow-inner absolute bg-white -z-10">
			<AnimationContainer />
		</div>

		<SiteHeader />
		<slot />

		<SiteFooter />
	</main>
</template>