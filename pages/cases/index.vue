<template>
	<NuxtLayout>
		<div class="relative isolate overflow-hidden bg-gray-900 py-20 sm:py-28">
			<img src="/img/background.jpg"
				alt=""
				class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
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
					<h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Cases</h2>
					<p class="mt-6 text-lg leading-8 text-gray-300">Alguns projetos nos causam um orgulho especial. Confira abaixo alguns dos nossos cases de sucesso.</p>
				</div>
				<!-- <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
				<div v-for="card in cards"
					:key="card.name"
					class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
					<component :is="card.icon"
						class="h-7 w-5 flex-none text-sky-400"
						aria-hidden="true" />
					<div class="text-base leading-7">
						<h3 class="font-semibold text-white">{{ card.name }}</h3>
						<p class="mt-2 text-gray-300">{{ card.description }}</p>
					</div>
				</div>
			</div> -->
			</div>
		</div>

		<div class="overflow-hidden bg-white py-12 sm:py-24">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div class="lg:pr-8 lg:pt-4">
						<div class="lg:max-w-lg">
							<h2 class="text-base font-semibold leading-7 text-sky-600">Desenvolvimento + Design</h2>
							<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Um novo e elegante website para a Prefeitura de Monte Belo do Sul</p>
							<p class="mt-6 text-lg leading-8 text-gray-600">Este projeto ficou lindão e foi um sucesso. O site foi desenvolvido com o CMS WordPress e o tema foi desenvolvido do zero, desde o design ao desenvolvimento. O site foi mantido ativamente até o final de 2021.</p>
							<div class="mt-10 flex items-center gap-x-6">
								<nuxt-link to="/cases/prefeitura-monte-belo-do-sul"
									class="flex items-center lg:text-sm lg:font-semibold lg:leading-6 text-sky-900 hover:text-sky-600 flex-row"> Veja o case
									<ArrowLongRightIcon class="ml-1.5 h-5 w-5 text-inherit" />
								</nuxt-link>
							</div>
						</div>
					</div>

					<div class="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0">
						<div class="relative overflow-hidden pt-2">

							<div class="mx-auto max-w-7xl px-6 lg:px-8">
								<img src="/images/cases/PrefeituraMonteBeloDoSul/screenshot.png"
									alt="App screenshot"
									class="mb-[-12%] rounded-xl shadow-2xl  ring-1 ring-gray-900/25"
									width="2432"
									height="1442" />
								<div class="relative"
									aria-hidden="true">
									<div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[8%]" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="overflow-hidden bg-slate-50 py-12 sm:py-24">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div class="lg:pr-8 lg:pt-4">
						<div class="lg:max-w-lg">
							<h2 class="text-base font-semibold leading-7 text-sky-600">Desenvolvimento + Design</h2>
							<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Inovação de ponta a ponta</p>
							<p class="mt-6 text-lg leading-8 text-gray-600">Cada pixel deste projeto foi projetado e desenvolvido com muito carinho. Um pacote com illustrações personalisadas, design e desenvolvimento do website, plugins e tema para WordPress, ajudam a <strong>Spark</strong> até hoje à demonstrar rapidamente seus produtos e serviços.</p>
							<div class="mt-10 flex items-center gap-x-6">
								<nuxt-link to="/cases/spark"
									class="flex items-center lg:text-sm lg:font-semibold lg:leading-6 text-sky-900 hover:text-sky-600 flex-row"> Veja o case
									<ArrowLongRightIcon class="ml-1.5 h-5 w-5 text-inherit" />
								</nuxt-link>
							</div>
						</div>
					</div>

					<div class="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0">
						<div class="relative overflow-hidden pt-2">

							<div class="mx-auto max-w-7xl px-6 lg:px-8">
								<img src="/images/cases/Spark/screenshot.png"
									alt="App screenshot"
									class="mb-[-12%] rounded-xl shadow-2xl  ring-1 ring-gray-900/25"
									width="2432"
									height="1442" />
								<div class="relative"
									aria-hidden="true">
									<div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-slate-50 pt-[8%]" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="overflow-hidden bg-white py-12 sm:py-24">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div class="lg:pr-8 lg:pt-4">
						<div class="lg:max-w-lg">
							<h2 class="text-base font-semibold leading-7 text-sky-600">Desenvolvimento + Design</h2>
							<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
							<p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
							<div class="mt-10 flex items-center gap-x-6">
								<nuxt-link to="/cases/dalwer"
									class="flex items-center lg:text-sm lg:font-semibold lg:leading-6 text-sky-900 hover:text-sky-600 flex-row"> Veja o case
									<ArrowLongRightIcon class="ml-1.5 h-5 w-5 text-inherit" />
								</nuxt-link>
							</div>
						</div>
					</div>

					<div class="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0">
						<div class="relative overflow-hidden pt-2">

							<div class="mx-auto max-w-7xl px-6 lg:px-8">
								<img src="/images/cases/Dalwer/screenshot.jpg"
									alt="App screenshot"
									class="mb-[-12%] rounded-xl shadow-2xl  ring-1 ring-gray-900/25"
									width="2432"
									height="1442" />
								<div class="relative"
									aria-hidden="true">
									<div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[8%]" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>


		<!-- <div class="p-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 -mt-12 z-20">
			<div v-for="route in nestedRoutes"
				:key="route.path"
				class="rounded-lg shadow-md overflow-hidden bg-white">
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
					<p class="text-inherit">{{ route.path }}</p>
				</div>
			</div>
		</div> -->
	</NuxtLayout>
</template>

<script>
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/vue/20/solid'
import { ArrowRightIcon, ArrowLongRightIcon } from '@heroicons/vue/24/outline'

export default {
	data() {
		return {
			nestedRoutes: [],
			cards: [
				{
					name: "Sales",
					description: "Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.",
					icon: PhoneIcon,
				},
				{
					name: "Technical Support",
					description: "Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.",
					icon: LifebuoyIcon,
				},
				{
					name: "Media Inquiries",
					description: "Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.",
					icon: NewspaperIcon,
				},
			]
		};
	},
	created() {
		this.$router.options.routes.forEach((routeOption) => {
			if (routeOption.path.startsWith(this.$route.path)) {
				// except for the current route
				if (routeOption.path === this.$route.path)
					return;
				this.nestedRoutes.push({
					name: routeOption.name,
					path: routeOption.path,
					thumb: routeOption.thumb || null
				});
			}
		});
	},
	components: { ArrowRightIcon, ArrowLongRightIcon }
}
</script>
