<template lang="">
  <div>
    <nav>
      <div class="container">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="link"> Home </NuxtLink>
          <NuxtLink to="/portfolio/" class="link"> Portfolio </NuxtLink>
          <NuxtLink to="/blog/" class="link"> Blog </NuxtLink>
          <NuxtLink to="/about/" class="link"> About </NuxtLink>
        </div>
      </div>
    </nav>
    <header>
      <NuxtLink to="/" class="link">
        <img
          src="/static/favicon_cricadev.png"
          alt="Cricadev"
          class="w-8 h-8"
        />
      </NuxtLink>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>
