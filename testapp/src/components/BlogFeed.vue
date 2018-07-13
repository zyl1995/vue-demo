<template>
  <transition-group tag="ul" :name="transition"  class="blog__feed">
    <li v-for="post in feed" class="preview" :key="post.id">
      <figure class="preview__figure" :style="getBgImg(post.image)">
        <transition name="v--fade">
          <figcaption class="preview__details">
            <router-link class="preview__title"
              :to="`/read/${post.id}`">
              {{ post.title }}
            </router-link>

            <div class="preview__meta">
              <time class="preview__published">
                {{ post.published }}
              </time>
                {{ post.author }}
            </div>
          </figcaption>
        </transition>
      </figure>
    </li>
  </transition-group>
</template>

<script>

export default {
  name: 'blog-feed',
  resource: 'BlogFeed',

  props: {
    filters: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      posts: [],
      transition: 'preview-appear'
    }
  },

  computed: {
    feed() {
      const filterBy = {
        post: (filter, { id }) => filter === id,
      }
      if (!Object.keys(this.filters).length) return this.posts
      return this.posts.filter(post => {
        return Object.keys(this.filters).every(filter => {
            return filterBy[filter](this.filters[filter], post)
        })
      })
    }
  },

  methods: {
    getBgImg(src) {
      return { backgroundImage: `url(${src})` }
    },
  },

  beforeMount() {
    this.$getResource('feed')
      .then(posts => {
        this.posts = posts
        this.transition = 'preview'
      })
  }
}
</script>
