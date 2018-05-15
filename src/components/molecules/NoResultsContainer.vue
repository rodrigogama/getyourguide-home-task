<template>
  <div class="no-result__wrapper">
    <div class="no-result__container">
      <div>{{ feedbackMessage }}</div>

      <div>Why don't you take a look at our top attractions? :)</div>

      <div class="top-attractions-cards">
        <article
          v-for="(attraction, index) in topAttractions"
          :key="index">
          <a :href="attraction.url">
            <img
              :src="attraction.imgSrc"
              class="article-img"
              alt=" " >
            <div class="article-title">
              {{ attraction.title }}
            </div>
          </a>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import AttractionService from '../../services/attraction.service'

export default {
  name: 'NoResultsContainer',

  props: {
    searchedTerm: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      feedbackMessage: this.createFeedbackMessage(),
      topAttractions: []
    }
  },

  watch: {
    searchedTerm (newTerm, oldTerm) {
      this.feedbackMessage = this.createFeedbackMessage()
    }
  },

  async created () {
    this.topAttractions = await AttractionService.getTopAttractions()
  },

  methods: {
    createFeedbackMessage () {
      if (this.searchedTerm) {
        return `Sorry, we couldn't find any results matching "${this.searchedTerm}".`
      } else {
        return 'No results found.'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.no-result {
  &__wrapper {
    height: 100%;
    text-align: center;
    position: relative;
  }

  &__container {
    margin: auto;
    padding: 1rem;
    text-align: center;
    font-size: 2rem;
    width: 95%;
  }
}

.top-attractions-cards {
  width: 70%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;

  article {
    position: relative;
    height: 20rem;
    a {
      color: inherit;
      position: relative;
    }
  }

  .article-img {
    height: 20rem;
    width: 100%;
    object-fit: cover;
  }

  .article-title {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    color: inherit;
    background-color: rgba(255, 255, 255, 0.75);
  }
}
</style>
