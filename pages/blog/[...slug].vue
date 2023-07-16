<template>
  <div>
    <div class="post-title">
      <h1>{{ post.title }}</h1>
      <p>{{ post.date }} | {{ post.author }} | {{ post.category }}</p>
    </div>
    <div v-if="post.featuredImage" class="featured-image">
      <img :src="post.featuredImage" alt="">
    </div>
    <div v-html="post.content" />
    <div class="author-info">
      <h2>{{ post.author }}</h2>
      <p>{{ post.authorBio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug).fetch()

    return {
      post
    }
  }
}
</script>