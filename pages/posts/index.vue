<template>
  <div id="recipes-page" class="page-wrapper Recipes-page">
    <site-hero title="Recipes" image="https://picsum.photos/1800/1801" />
    <main-section theme="one-column">
      <recipes-grid />
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `Recipes | ${this.$siteConfig.siteName}`
    }
  }
}
</script>
