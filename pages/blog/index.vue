<template lang="">
  <div>
    <h1>hola</h1>
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
