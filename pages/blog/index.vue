<template>
  <NuxtLayout>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="post in posts"
            :key="post.id"
            class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img v-if="post.image" :src="post.image"
              alt=""
              class="absolute inset-0 -z-10 h-full w-full object-cover" />
            <div v-else class="absolute inset-0 -z-10 h-full w-full flex items-center justify-center text-white text-xl font-bold">
              Sem imagem
            </div>
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

            <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              <time :datetime="post.datetime"
                class="mr-8">{{ formatDate(post.date, 'pt-BR') }}</time>
              <div class="-ml-4 flex items-center gap-x-4">
                <svg viewBox="0 0 2 2"
                  class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                  <circle cx="1"
                    cy="1"
                    r="1" />
                </svg>
                <div class="flex gap-x-2.5">
                  <img :src="post.author.image"
                    alt=""
                    class="h-6 w-6 flex-none rounded-full bg-white/10" />
                  {{ post.author.name }}
                </div>
              </div>
            </div>
            <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
              <a :href="post._path">
                <span class="absolute inset-0" />
                {{ post.title }}
              </a>
            </h3>
          </article>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const formatDate = (date, locale) => {
  return format(new Date(date), 'dd/MM/yyyy', { locale: ptBR })
}

const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').limit(10).find())
</script>
