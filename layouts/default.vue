<template lang="">
  <body id="app" :class="dark ? 'dark' : 'light'" class="">
    <main class="dark-mode-bg">
      <Header />

      <Nuxt />

      <Footer />
    </main>
  </body>
</template>
<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapGetters(["dark"]),
  },
};
</script>
<style lang=""></style>
