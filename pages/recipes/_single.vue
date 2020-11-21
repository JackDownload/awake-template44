<template>
  <div id="recipe-page" class="page-wrapper recipe-page">
    <site-hero
      :title="$store.state.name"
      :subtitle="$store.state.content"
      :image="$store.state.image"
    />
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <!-- Posts in Recipe -->
        <posts-grid :recipe="[$store.state.name]" :per-row="2" />
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle">
          All Categories
        </h3>
        <div class="panel">
          <nuxt-link
            v-for="cat in allCats"
            :key="cat.slug"
            :to="`/recipes/${cat.slug}`"
            :class="{
              'panel-block': true,
              'is-active': cat.slug === $route.params.single
            }"
          >
            {{ cat.name }}
          </nuxt-link>
        </div>
      </template>
    </main-section>
  </div>
</template>
<script>
import { setPageData } from '../../helper'
export default {
  data() {
    return {
      allCats: []
    }
  },
  fetch({ store, params }) {
    setPageData(store, { resource: 'recipe', slug: params.single })
  },
  async created() {
    this.allCats = await this.$cms.recipe.getAll()
  }
}
</script>
