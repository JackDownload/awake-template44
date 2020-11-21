<template>
  <generic-card
    :title="title"
    :image="image"
    :link="link"
    :image-dimensions="
      $siteConfig.recipes.imageDimensions ||
        $siteConfig.cards.imageDimensions ||
        null
    "
  >
    <span
      v-if="author && $siteConfig.recipes.displayAuthor"
      class="author-wrapper"
    >
      <strong>Author:</strong> {{ author }} |
    </span>
    <span v-if="date" class="date-wrapper">
      <strong>Published on:</strong> {{ datePretty }}
    </span>
  </generic-card>
</template>

<script>
import GenericCard from './GenrecipeCard'
import { getFormattedDate } from '~/helper'
export default {
  components: { GenericCard },
  props: {
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    }
  },
  computed: {
    datePretty() {
      return getFormattedDate(this.date)
    }
  }
}
</script>
