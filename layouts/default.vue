<template lang="">
  <main id="page">
    <Header />
    <Nuxt />
    <Footer />
  </main>
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
