<template lang="">
  <div>
    <span>{{ document.title }}</span>
  </div>
</template>
<script>
export default {
  name: "BlogPost",
  async asyncData({ $prismic, error, params }) {
    try {
      const result = await $prismic.api.getByUID("blog_posts", params.uid, {
        lang: "en-us",
        fetchLinks: [
          "blog_category.title",
          "blog_category.uid",
          "blog_author.name",
          "blog_author.uid",
          "blog_author.image",
        ],
      });
      const related = await $prismic.api.query(
        [
          $prismic.predicates.at("document.type", "blog_posts"),

          $prismic.predicates.similar(result.id, 80),
        ],
        {
          lang: "es-mx",
          pageSize: 4,
        }
      );

      const document = result.data;
      return {
        document,
        relatedPosts: related.results,
        slices: result.data.body,
      };
    } catch (e) {
      let statusCode = 500;
      if (e.error) {
        statusCode = e.error.statusCode;
      }
      error({
        statusCode,
        message: e.message || "Page not found",
      });
    }
  },
};
</script>
<style lang=""></style>
