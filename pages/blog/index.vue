<template lang="">
  <div class="text-4xl text-center">
    <h2 class="m-10 text-white text-xl4_d">
      <span>{{ document.uid }}</span>
    </h2>
    <div class="block">
      <NuxtLink to="/blog/welcome-to-cricadev" class="link">BLOG 1</NuxtLink>
      <NuxtLink to="/blog/how-to-learn-fast" class="link">BLOG 2</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID("blog_home", "blog");

    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
<style lang="scss"></style>
