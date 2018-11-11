<template>
  <aside
    style="position: fixed; min-height: calc(100vh - 40px); top: 40px; background: #E9EBEE"
    class="is-fixed-top column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile is-fullheight"
  >
    <p class="menu-label is-hidden-touch">Navigation</p>
    <ul class="menu-list">
      <li>
        <router-link exact active-class="is-active" to="/">
          <span class="icon">
            <font-awesome-icon icon="home" />
          </span> Memes
        </router-link>
      </li>
      <li>
        <router-link active-class="is-active" to="/generator">
          <span class="icon">
            <font-awesome-icon icon="image" />
          </span> Generator
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.menu-list a.is-active {
  background-color: #477fb0;
}
</style>
