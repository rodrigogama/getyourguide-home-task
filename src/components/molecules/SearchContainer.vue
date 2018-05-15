<template>
  <header class="header">
    <logo />

    <div class="header__text-container">
      <h1 class="heading-primary">
        <span class="heading-primary--main">Outdoors</span>
        <span class="heading-primary--sub">is where life happens</span>
      </h1>

      <search-box
        placeholder-message="What's your next destination?"
        @submit="searchAttraction"
      />
    </div>
  </header>
</template>

<script>
import Logo from '../atoms/Logo.vue'
import SearchBox from '../atoms/SearchBox.vue'

export default {
  name: 'Header',

  components: {
    Logo,
    SearchBox
  },

  methods: {
    searchAttraction (searchTerm) {
      this.$router.push({
        name: 'AttractionsPage',
        query: { q: searchTerm }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../sass/base/mixins";
@import "../../sass/base/variables";

.header {
  height: 100vh;
  background-image: url('https://cdn.getyourguide.com/img/tour_img-367420-145.jpg');
  background-size: cover;
  background-position: top;
  position: relative;

  .header__text-container {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .heading-primary {
      color: $color-white;
      text-transform: uppercase;

      backface-visibility: hidden;
      margin-bottom: 6rem;

      &--main {
          display: block;
          font-size: 6rem;
          font-weight: 400;
          letter-spacing: 3.5rem;

          animation-name: moveInLeft;
          animation-duration: 1s;
          animation-timing-function: ease-out;

          @include respond(phone) {
              letter-spacing: 1rem;
              font-family: 5rem;
          }
      }

      &--sub {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          letter-spacing: 1.75rem;
          animation: moveInRight 1s ease-out;

          @include respond(phone) {
              letter-spacing: .5rem;
          }
      }
    }
  }
}
</style>
