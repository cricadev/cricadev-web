<template lang="">
  <body id="app">
    <main class="w-full min-h-screen dark-mode-bg">
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
