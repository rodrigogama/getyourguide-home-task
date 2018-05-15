<template>
  <div>
    <p class="result__total-text">{{ attractions.length }} attractions found.</p>
    <section class="result">
      <article
        v-for="(attraction, index) in attractions"
        :key="index">
        <h3 class="result__text">{{ attraction.title }}</h3>

        <div
          v-if="attraction.isSpecialOffer"
          class="result__special-offer">
          <i class="fa fa-tags"/> Special offer!
        </div>

        <div class="result-footer">
          <star-rating
            :inline="true"
            :star-size="20"
            :read-only="true"
            :show-rating="false"
            :rating="Number(attraction.rating)"
            :round-start-rating="false"/>
          <p class="result__price">
            {{ `${attraction.currency}${attraction.price}` }}
          </p>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
  name: 'AttractionList',

  components: {
    StarRating
  },

  props: {
    items: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      attractions: this.items
    }
  },

  watch: {
    items (newItems) {
      this.attractions = newItems
    }
  }
}
</script>

<style lang="scss" scoped>
.result {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 2rem;
  padding: 1.5rem;

  &-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &__total-text {
    font-size: 2rem;
    padding: 1.5rem 0 0 1.5rem;
  }

  &__special-offer {
    margin-bottom: 1rem;
    line-height: 5rem;
    font-size: 1.8rem;
    color: darkorange;
  }

  &__text {
    display: block;
    flex: 1;
  }

  &__price {
    align-self: flex-start;
    text-align: right;
    font-size: 2.5rem;
    line-height: 2.3rem;
    color: #2b2b2b;
  }
}

article {
  position: relative;
  background-color: rgba(255,255,255,0.2);
  border: 1px solid #00B4CC;
  font-size: 1.5rem;
  padding: 1.5rem;
  text-align: center;
  border-radius: 3px;
  transition: transform .3s;
  display: flex;
  flex-direction: column;
  height: 18rem;

  &:hover {
    transform: translateY(-.8rem) scale(1.03);
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
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
