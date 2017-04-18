<template>
  <div>
		<top></top>
    <main-page></main-page>
    <bottom></bottom>
  </div>
</template>

<script>
import top from './header.vue'
import mainPage from './main.vue'
import bottom from './footer.vue'

export default {
  components: {
    top,
    mainPage,
    bottom
  },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>