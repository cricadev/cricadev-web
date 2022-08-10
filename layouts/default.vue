<template lang="">
<<<<<<< HEAD
  <body id="app">
    <main class="w-full min-h-screen dark-mode-bg">
=======
  <body id="app" :class="dark ? 'dark' : 'light'" class="">
    <main class="dark-mode-bg">
>>>>>>> parent of 055638d (modified layout)
      <Header />
      <Nuxt />
      <Footer />
    </main>
  </body>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang=""></style>
