<template>
	<div class="w-full flex max-w-3xl mx-auto px-1 xl:px-0 py-1 gap-3 justify-between"
		:class="{
			'bg-transparent': message.role == 'user',
			'bg-cyan-50': message.role == 'assistant'
		}">

		<div class="min-w-8">
			<AvaLogo class="h-8 w-8" v-if="message.role == 'assistant'" />
			<UserAvatar class="h-auto w-7.5 bg-slate-200 p-0 rounded-full overflow-hidden" v-if="message.role == 'user'" />
		</div>

		<div class="flex flex-1 flex-col max-w-full w-full pt-1">
			<span class="text-[7.5px] text-black leading-none tracking-wider uppercase font-bold">{{ message.role }}</span>
			<div v-html="markdownToHtml(message.content)"
				class="gap-0 space-y-2 leading-tight tracking-tighter prose prose-sm max-w-full lg:prose-md w-full"></div>
		</div>

		<div class="flex items-start justify-end w-6">
			<button @click="deleteMessage(message.id)">
				<i class="lni lni-times text-2xl text-gray-700 hover:text-gray-900"></i>
			</button>
		</div>
	</div>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
	props: {
		message: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			md: new MarkdownIt()
		}
	},
	methods: {
		markdownToHtml(content) {
			return this.md.render(content)
		},
		deleteMessage(id) {
			this.$emit('delete-message', id)
		}
	}
}
</script>