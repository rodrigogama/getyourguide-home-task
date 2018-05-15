<template>
  <div class="search-box__container">
    <input
      v-model="searchTerm"
      :placeholder="placeholderMessage"
      type="text"
      class="search-box__text"
      @keyup.enter="emitSubmit">

    <button
      type="submit"
      class="search-box__button search-box__button"
      @click="emitSubmit"><i class="fa fa-search"/></button>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',

  props: {
    initialValue: {
      type: String,
      default: ''
    },

    placeholderMessage: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      searchTerm: this.initialValue
    }
  },

  methods: {
    emitSubmit () {
      this.$emit('submit', this.searchTerm)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../sass/base/variables";

.search-box {
  &__container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  &__text {
    display: block;
    margin: 0;
    padding: $inputVerticalPadding $inputHorizontalPadding;
    color: inherit;
    width: 100%;
    font-size: $inputFontSize;
    line-height: $lineHeightMd;
    border: none;
    border-radius: 0.4rem;
    transition: box-shadow 300ms;

    &:focus {
      outline: none;
      box-shadow: 0.1rem 0.7rem 1.5rem rgba(0, 0, 0, .4);
    }
  }

  &__button {
    margin: 8px;
    line-height: 1.8;
    padding: $inputVerticalPadding $inputHorizontalPadding;
    font-size: $inputFontSize;
    border: 1px solid #00B4CC;
    border-radius: 5px;
    background: #00B4CC;
    text-align: center;
    color: #fff;
    cursor: pointer;
    outline: none;

    &:focus,
    &:hover {
      background: rgb(2, 158, 179);
    }
  }
}
</style>
