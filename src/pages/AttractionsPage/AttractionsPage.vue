<template>
  <div>
    <section class="search-section">
      <logo />

      <search-box
        :initial-value="searchTerm"
        placeholder-message="Search for an attraction or a place to visit"
        @submit="fetchData"
      />
    </section>

    <section
      v-if="!isLoading"
      class="results-section">
      <template v-if="attractions.length > 0">
        <attraction-list :items="attractions" />
      </template>
      <template v-else>
        <no-results-container
          :searched-term="searchTerm"
        />
      </template>
    </section>
  </div>
</template>

<script>
import Logo from '../../components/atoms/Logo.vue'
import SearchBox from '../../components/atoms/SearchBox.vue'
import AttractionList from '../../components/molecules/AttractionList.vue'
import NoResultsContainer from '../../components/molecules/NoResultsContainer.vue'
import AttractionService from '../../services/attraction.service'

export default {
  name: 'AttractionPage',

  components: {
    Logo,
    SearchBox,
    AttractionList,
    NoResultsContainer
  },

  data () {
    return {
      searchTerm: '',
      attractions: [],
      isLoading: true
    }
  },

  created () {
    const { q } = this.$route.query

    if (q) {
      this.searchTerm = q
      this.fetchData(this.searchTerm)
    }
  },

  methods: {
    async fetchData (searchTerm = '') {
      this.isLoading = true
      this.searchTerm = searchTerm
      const attractions = await AttractionService.getAttractions(searchTerm)

      // order by special offer first
      this.attractions = attractions.sort((a, b) => (a.isSpecialOffer === b.isSpecialOffer) ? 0 : a.isSpecialOffer ? -1 : 1)
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../sass/base/mixins";
@import "../../sass/base/variables";

.search-section {
  height: 40vh;
  background-image: url('https://cdn.getyourguide.com/img/location_img-33-3081082103-88.jpg');
  background-size: cover;
  background-position: top;
  position: relative;
}

.results-section {
  height: 60vh;
}

.search-box__container {
  width: 60vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  @include respond(phone) {
    min-width: 30rem;
  }
}
</style>
