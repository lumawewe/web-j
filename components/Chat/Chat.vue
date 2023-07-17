<template>
	<div class="min-h-full h-fit  flex flex-col justify-between">
		<header class="w-full py-2">
			<div class="max-w-3xl mx-auto px-2 xl:px-0">
				<NuxtLink to="/"
					id="logo">
					<AvaLogo class="w-12" />
				</NuxtLink>
			</div>
		</header>

		<!-- message -->
		<div class="w-full flex flex-col flex-1 divide-y mb-16">
			<transition-group name="list"
				v-if="messages.length"
				tag="div"
				class="divide-y">
				<div class="w-full py-0 flex"
					v-for="message in messages"
					:key="message.id">
					<ChatMessage :message="message" />
				</div>
			</transition-group>
		</div>

		<!-- form -->
		<form @submit.prevent="sendMessage"
			class="fixed bottom-0 w-full px-2 xl:px-0 bg-white pt-2 pb-2">
			<div class="w-full max-w-3xl mx-auto relative ">
				<textarea class="w-full pr-10 pl-2 py-2 min-h-fit h-20 overflow-hidden border bg-gray-50 shadow-inner border-black rounded text-sm leading-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
					id="messageForm"
					placeholder="Digite aqui ..."
					aria-setsize="3"
					aria-multiline="true"
					aria-label="Digite aqui ..."
					v-model="message"
					@input="autoResizeTextarea"
					@blur="autoResizeTextarea"
					@keydown.ctrl.enter="sendMessage"
					rows="3"></textarea>
				<button type="submit"
					title="Clique para enviar a mensagem (Ctrl + Enter)"
					class="absolute h-8 w-8 items-center justify-center flex right-1.5 bottom-3 rounded-full bg-gray-900 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-900">
					<Icon name="ph:paper-plane-tilt" />
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import MarkdownIt from 'markdown-it'

export default {
	data() {
		return {
			message: null,
			messages: [],
			md: new MarkdownIt(),
			counter: 0,
			model: null
		}
	},
	beforeMount() { },
	async mounted() {
		this.messages = await fetch(`/api/chat/${this.$route.params.id}`)
			.then(response => response.json())
			.catch(error => console.error(error))
	},
	methods: {
		async sendMessage() {
			if (this.message) {
				const message = {
					id: this.counter++,
					text: this.message,
				}
				this.messages.push(message)
				this.message = null

				await fetch(`/api/chat/${this.$route.params.id}`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(message)
				})
					.then(response => response.json())
					.catch(error => console.error(error))
			}

			this.autoResizeTextarea()			
		},
		editMessage(id) {
			const message = this.messages.find((msg) => msg.id === id)
			if (message) {
				this.message = message.text
				this.deleteMessage(id)
			}
		},
		deleteMessage(id) {
			this.messages = this.messages.filter((msg) => msg.id !== id)
		},
		markdownToHtml(text) {
			return this.md.render(text)
		},
		autoResizeTextarea() {
			this.$nextTick(() => {
				const textarea = document.getElementById('messageForm')
				textarea.style.height = 'auto'
				textarea.style.height = textarea.scrollHeight + 'px'

				if (textarea.scrollHeight > 200) {
					textarea.style.overflowY = 'scroll'
				} else {
					textarea.style.overflowY = 'hidden'
				}

				if (textarea.scrollHeight < 100) {
					textarea.style.height = '100px'
				}
			})
		}
	}
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
	transition: all 0.5s;
}

.list-enter,
.list-leave-to {
	transform: translateY(30px);
	opacity: 0;
}
</style>