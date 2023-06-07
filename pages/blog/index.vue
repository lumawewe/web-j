<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
      </div>

      <div v-if="pending">
        Loading...
      </div>
      <div v-if="posts">
        <article v-for="post in posts"
          :key="post.id"
          class="flex flex-col items-start justify-between">
          <div class="relative w-full">
            <img :src="post.imageUrl"
              alt=""
              class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]" />
            <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime"
                class="text-gray-500">{{ post.date }}</time>
              <a href="#"
                class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">General</a>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <nuxt-link :to="`/blog/${post.slug}`">
                  <span class="absolute inset-0" />
                  {{ post.title.rendered }}
                </nuxt-link>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.description }}</p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img :src="post.author.imageUrl"
                alt=""
                class="h-10 w-10 rounded-full bg-gray-100" />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a href="#">
                    <span class="absolute inset-0" />
                    {{ post.author.name }}
                  </a>
                </p>
                <p class="text-gray-600">{{ post.author.role }}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div v-if="!pending && !posts">
        No posts found.
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '#app'

const url = 'https://agenciamav.com.br/blog/wp-json/wp/v2/posts'
const { data: posts, pending } = useFetch(url)
</script>

