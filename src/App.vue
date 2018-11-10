<template>
  <div id="app">
    <Navbar />
    <section class="main-content columns is-fullheight is-marginless">
      <Sidebar />
      <div class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile"/>
      <div class="container column is-9" style="padding: 65px 0.75rem;">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@import "~bulma/bulma";
@import "~bulma-extensions/bulma-slider/dist/css/bulma-slider";
</style>
