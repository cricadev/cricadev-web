<template lang="">
  <div class="text-4xl text-center">
    <h1 class="m-10 text-9xl">CRICABLOG</h1>

    <a href="/" class="p-4 text-green-500 underline">HOME</a>
    <a href="/portfolio/" class="p-4 text-green-500 underline">PORTFOLIO</a>
    <a href="/about/" class="p-4 text-green-500 underline">ABOUT ME</a>
    <a href="/blog/" class="p-4 text-green-500 underline">BLOG</a>
    <div class="block">
      <a href="/blog/how-to-learn-fast" class="p-4 text-green-500 underline"
        >blog 1</a
      >
      <a href="/blog/welcome-to-cricadev" class="p-4 text-green-500 underline"
        >blog 2</a
      >
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
