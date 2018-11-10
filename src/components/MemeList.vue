<template>
  <div class="">
    <div class="columns">
      <div class="column">
        <h1 class="title">Meme list</h1>
        <input
          type="text"
          v-model="presenter.keyword"
          @keydown.enter="presenter.searchByKeyword"
          class="input is-medium"
          placeholder="Search.."
        />
      </div>
    </div>
    <div v-if="presenter.loading" class="has-text-centered">
      Loading...
    </div>
    <div v-else-if="!presenter.memes.length">Result not found</div>
    <div v-else class="columns is-multiline custom-columns-layout">
      <div
        v-for="meme in presenter.memes"
        :key="meme.generatorID"
        class="column is-3-desktop is-4-tablet is-full-mobile is-inline-block-mobile"
      >
        <router-link :to="{ path: '/generator', query: { image: meme.imageUrl } }">
          <div class="card">
            <div class="card-image">
              <figure class="image is-square">
                <img :src="meme.imageUrl" :alt="meme.displayName" />
              </figure>
            </div>
            <div class="card-content overflow-content">
              <strong>{{ meme.displayName }}</strong>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MemePresenter from '@/presenters/memepresenter'

export default {
  name: 'MemeList',
  data () {
    return {
      presenter: new MemePresenter(this)
    }
  },
  async mounted () {
    this.presenter.init()
  }
}
</script>

<style scoped lang="scss">

.overflow-content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card {
  border-radius: 3px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 7px 10px 0.1rem rgba(0,0,0,0.3);
  }
}

</style>
