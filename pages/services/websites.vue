<template>
	<div class="bg-white">
		<div class="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
			<img src="/img/background.jpg"
				alt=""
				class="absolute inset-0 -z-10 h-full w-full object-cover" />
			<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true">
				<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
			</div>
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl py-16 sm:py-24 lg:py-28">
					<!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center gap-3">
									<div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
										<a href="#"
											class="font-semibold text-white">Desenvolvimento</a>
									</div>
									<div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
										<a href="#"
											class="font-semibold text-white">Design</a>
									</div>
								</div> -->
					<div class="text-center">
						<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl"><small>Desenvolvimento de </small>websites</h1>
						<p class="mt-6 text-lg leading-8 text-gray-300">Desenvolvemos websites com foco em conversão e performance. Nossos sites são desenvolvidos com as melhores tecnologias do mercado, garantindo a melhor experiência para o usuário.</p>
						<div class="mt-10 flex items-center justify-center gap-x-6">
							<a href="#"
								class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Faça um orçamento</a>
							<a href="#"
								class="text-sm font-semibold leading-6 text-white items-center flex-row flex">Veja mais
								<ChevronDownIcon class="ml-3 h-5 w-5 text-white"
									aria-hidden="true" />
							</a>
						</div>
					</div>
				</div>
			</div>


		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import {
	ArrowDownIcon,
	ArrowPathIcon,
	Bars3Icon,
	ChevronDownIcon,
	CloudArrowUpIcon,
	FingerPrintIcon,
	LockClosedIcon,
	XMarkIcon,
} from '@heroicons/vue/24/outline'
import { CheckIcon } from '@heroicons/vue/20/solid'

const navigation = [
	{ name: 'Product', href: '#' },
	{ name: 'Features', href: '#' },
	{ name: 'Marketplace', href: '#' },
	{ name: 'Company', href: '#' },
]
const features = [
	{
		name: 'Push to deploy',
		description:
			'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'SSL certificates',
		description:
			'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
		icon: LockClosedIcon,
	},
	{
		name: 'Simple queues',
		description:
			'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
		icon: ArrowPathIcon,
	},
	{
		name: 'Advanced security',
		description:
			'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
		icon: FingerPrintIcon,
	},
]
</script>