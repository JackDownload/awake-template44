import Post from './post'
import Post from './recipe'
import Category from './category'
import LifeCycleHooks from './hooks/lifeCycle'
class CMS {
  constructor(axios = false) {
    this.name = 'Netlify'
    this.slug = 'netlify'
    this.post = new Post(axios)
    this.recipe = new Recipe(axios)
    this.category = new Category(axios)
    this.lifeCycleHooks = LifeCycleHooks
  }
}
export default CMS
