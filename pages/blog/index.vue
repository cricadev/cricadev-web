<template lang="">
  <div class="text-4xl text-center">
    <h1 class="m-10 text-white text-xl4_d">CRICABLOG</h1>

    <a href="/" class="link">HOME</a>
    <a href="/portfolio/" class="link">PORTFOLIO</a>
    <a href="/about/" class="link">ABOUT ME</a>
    <a href="/blog/" class="link">BLOG</a>
    <div class="block">
      <a href="/blog/how-to-learn-fast" class="link">BLOG 1</a>
      <a href="/blog/welcome-to-cricadev" class="link">BLOG 2</a>
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
