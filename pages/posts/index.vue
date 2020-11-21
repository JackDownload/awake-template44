<template>
  <div id="posts-page" class="page-wrapper Posts-page">
    <site-hero title="Posts" image="https://picsum.photos/1800/1801" />
    <main-section theme="one-column">
      <posts-grid />
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Posts | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
