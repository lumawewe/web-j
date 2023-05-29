<template>
  <footer class="w-full flex items-center justify-center py-4">
    <small>© {{ currentYear }} by Agência Mav. Version {{ buildDate }}. Proudly created with Nuxt.js</small>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      buildDate: this.$config.public.buildDate,
      currentYear: new Date().getFullYear()
    }
  }
}
</script>