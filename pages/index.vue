<template>
  <div class="text-4xl text-center">
    <h2 class="m-10 text-white text-xl4_d dark:text-black">
      <span>{{ document.uid }}</span>
    </h2>
    <div class="min-h-full wrap-image"></div>
  </div>
</template>

<script>
export default {
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.getByUID("home_homepage", "home");

    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
