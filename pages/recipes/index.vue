<template>
  <div id="home-page" class="page-wrapper home-page">
    <main-section theme="one-column">
      <template v-slot:default>
        <!-- All Recipess -->
        <recipes-grid />
      </template>
      <template v-slot:sidebar>
        Nothing here
      </template>
    </main-section>
    <news-letter-form-modal />
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