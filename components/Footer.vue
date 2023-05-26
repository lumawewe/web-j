<template>
  <footer class="py-5">
    <div class="container mx-auto flex justify-between items-center">
      <img class="h-8" :src="$colorMode.value === 'light' ? '/logo.svg' : '/logo_dark.svg'" alt="Agencia Mav Logo" />
      <nav>
        <ul class="flex space-x-4">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/services">Services</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
footer {
  background-color: var(--color-primary);
}
</style>