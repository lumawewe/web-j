<template>
	<div>
		<ImageCarousel :images="images" />
	</div>
	<!-- 
		TODO: 
		- [ ] Adicionar texto e imagens
		- [ ] Adicionar texto sobre o tema exclusivo
		- [ ] Adicionar descrição sobre o plugin de simulação de consórcios

		- [ ] Adicionar seção sobre o design do logo e manual de identidade visual
		- [ ] Adicionar imagens dos cartões de visita e mockups de papelaria
		- [ ] Adicionar link para o behance

		- [ ] Adicionar link para o site
	 -->
</template>

<script setup>
import { CloudIcon, ServerIcon, CalendarIcon, BellIcon, BookOpenIcon, BookmarkIcon, CodeBracketIcon } from '@heroicons/vue/20/solid'

definePageMeta({
	layout: "cases",
});

const features = [
	{
		name: 'Tema Exclusivo WordPress.',
		description:
			'Foi desenvolvido um tema WordPress exclusivo para a empresa, proporcionando uma aparência única e uma experiência de usuário otimizada para os clientes.',
		icon: CodeBracketIcon,
	},
]

const images = [
	'/images/cases/dalwer/screenshot-002.jpg',
	// '/images/cases/dalwer/screenshot-003.jpg',
	// '/images/cases/dalwer/screenshot-004.jpg',
	'/images/cases/dalwer/screenshot-005.jpg',
	'/images/cases/dalwer/screenshot-006.jpg',
]
</script>
