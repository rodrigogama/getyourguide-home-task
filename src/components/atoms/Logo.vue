<template>
  <a
    href="https://www.getyourguide.com"
    target="_blank">
    <figure>
      <img
        alt="Logo"
        src="https://cdn.getyourguide.com/static/current/customer/desktop/cached/gyg-logo.svg"
        class="logo"
      >
    </figure>
  </a>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss" scoped>
figure {
  position: absolute;
  top: 2rem;
  left: 2rem;

  img.logo {
    height: 8rem;
  }
}
</style>
