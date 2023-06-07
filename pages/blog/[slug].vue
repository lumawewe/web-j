<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <div v-if="pending && !post">
        Loading...
      </div>
      <div v-if="!pending && post">
        <article class="prose lg:prose-xl">
          <h2>{{ post.title.rendered }}</h2>
          <div v-html="post.content.rendered"></div>
        </article>
      </div>
      <div v-if="!pending && !post">
        No post found.
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '#app'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute() // get current route
const slug = computed(() => route.params.slug) // get slug from route params
const url = `https://agenciamav.com.br/blog/wp-json/wp/v2/posts?slug=${slug.value}` // build url
// fetch data and get the first post from the array
const { data: posts, pending } = useFetch(url)
const post = computed(() => posts.value && posts.value[0])
</script>