<template>
  <main>
    <blog-feed :filters="filters"/>
    <blog-post :post="post"/>
  </main>
</template>

<script>
import BlogFeed from './BlogFeed'
import BlogPost from './BlogPost'
export default {
  name: 'blog',
  components: { BlogFeed, BlogPost },
  resource: 'Blog',

  props: {
    post: String,
  },

  computed: {
    filters() {
      let filters = {}
      if (this.post) filters.post = this.post
        return filters
    }
  },
}
</script>