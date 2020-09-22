<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    clearTimeout(this.timeId)
  },
  handleScroll() {
    var scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop
    console.log(scrollTop)
    var offsetTop = document.querySelector('#searchBar').offsetTop
    if (scrollTop > offsetTop) {
      this.searchBarFixed = true
    } else {
      this.searchBarFixed = false
    }
  },
}
</script>

<style scoped>
</style>
