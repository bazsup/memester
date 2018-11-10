<template>
  <div class="home">
    <MemeList />
  </div>
</template>

<script>
// @ is an alias to /src
import MemeList from '@/components/MemeList.vue'

export default {
  name: 'home',
  components: {
    MemeList
  }
}
</script>
