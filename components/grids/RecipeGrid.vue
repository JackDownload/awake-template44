<template>
  <resource-grid
    v-bind="$props"
    :resource="$cms.recipe"
    :theme="$siteConfig.recipes.theme || $siteConfig.cards.theme || null"
  >
    <template v-slot:default="{ item }">
      <recipe-card
        :title="item.title"
        :link="item.slug ? `/${item.slug}` : ''"
        :image="item.featureImage"
        :author="item.author"
        :date="item.date"
      />
    </template>
  </resource-grid>
</template>

<script>
import RecipeCard from '~/components/cards/RecipeCard'
export default {
  name: 'RecipesGrid',
  components: { RecipeCard },
  props: {
    perRow: { type: Number, default: 3 },
    number: { type: Number, default: 0 },
    order: { type: String, default: 'DESC' },
    category: {
      type: Array,
      default() {
        return []
      }
    },
    exclude: { type: String, default: '' }
  }
}
</script>
