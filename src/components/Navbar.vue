<template>
  <nav id="nav" class="navbar is-fixed-top">
    <div class="navbar-brand">
      <router-link
        class="navbar-item"
        to="/"
      >
        <img src="@/assets/logo.png" width="112" height="30">
      </router-link>
      <a
        role="button"
        class="navbar-burger burger"
        v-bind:class="{ 'is-active' : showNav }"
        v-on:click="showNav = !showNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div
      class="navbar-menu"
      v-bind:class="{ 'is-active' : showNav }"
    >
      <div class="navbar-start">
        <router-link exact active-class="is-active" class="navbar-item is-hidden-tablet" to="/">Memes</router-link>
        <router-link active-class="is-active" class="navbar-item is-hidden-tablet" to="/generator">Generator</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      showNav: false
    }
  }
}
</script>

<style scoped>
.navbar {
  box-shadow: 0 1px 9px 0.1rem rgba(0,0,0,0.3) !important;
  background: #2B4862 !important;
  color: white;
}

.navbar-burger {
  color: white !important;
}
</style>
