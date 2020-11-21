<template>
  <div id="recipes-page" class="page-wrapper recipes-page">
    <site-hero :title="title" :subtitle="subtitle" :image="featureImage">
      <span
        v-if="author && $siteConfig.recipess.displayAuthor"
        class="author-wrapper"
      >
        <strong>Author:</strong> {{ author }}
      </span>
      <span v-if="date" class="date-wrapper">
        <strong>Published on:</strong> {{ date }}
      </span>
    </site-hero>
    <main-section :one-column-constrained="true">
      <template v-slot:default>
        <div class="recipes-wrapper">
          <markdown :markdown="$store.state.content" />
          <div class="other-recipess">
            <h6 class="subtitle is-size-4">
              Related Recipess
            </h6>
            <!-- Related Recipess -->
            <recipess-grid :number="3" :category="category" :exclude="slug" />
          </div>
          <disqus-comments :identifier="$route.params.singleRecipes" />
        </div>
      </template>
      <template v-slot:sidebar>
        <recipes-sidebar />
      </template>
    </main-section>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { setPageData, getFormattedDate } from '../../helper'
// import 'highlight.js/styles/github.css'
import Markdown from '~/components/Markdown'
import RecipesSidebar from '~/components/RecipesSidebar'
export default {
  components: {
    Markdown,
    RecipesSidebar
  },
  computed: {
    ...mapState([
      'title',
      'subtitle',
      'featureImage',
      'underSubtitle',
      'author',
      'slug'
    ]),
    date() {
      return getFormattedDate(this.$store.state.date)
    },
    url() {
      return `${process.env.URL}/${this.$route.fullPath}`
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'recipes', slug: params.singleRecipes })
  }
}
</script>
<style scoped lang="scss">
.edit-recipes {
  margin-bottom: 20px;
}
</style>
