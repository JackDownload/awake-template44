import { getMixins } from './mixins'

class Post {
  constructor(axios) {
    this.slug = 'recipe'
    this.slugPlural = 'recipes'
    this.pretty = 'Recipe'
    this.plural = 'recipes'
    this.axios = axios
    this.editUrl = '/admin/#/collections/recipes/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Post.prototype, getMixins)

export default Post
