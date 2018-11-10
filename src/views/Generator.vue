<template>
  <div class="meme-generator">
    <MemeGeneratorForm />
  </div>
</template>

<script>
// @ is an alias to /src
import MemeGeneratorForm from '@/components/MemeGeneratorForm.vue'

export default {
  name: 'home',
  components: {
    MemeGeneratorForm
  }
}
</script>
