<template>
  <div class="">
    <div class="columns">
      <div class="column">
        <h1 class="title">Meme list</h1>
        <form v-on:submit.prevent="presenter.searchByKeyword">
          <div class="field has-addons">
            <div class="control is-expanded">
              <div class="control">
                <input
                  type="text"
                  name="keyword"
                  v-model="presenter.keyword"
                  class="input is-medium"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-medium custom-button">Search</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div v-if="presenter.loading" class="has-text-centered loading">
      <font-awesome-icon icon="spinner" class="loading-spinner" />
      <div>Loading</div>
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

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading {
  color: #477FB0;
  margin-top: 60px;

  .loading-spinner {
    animation: spin 1.5s infinite linear;
    margin-bottom: 10px;
    font-size: 60px;
  }
}

.custom-button {
  background: #4d8ac0;
  color: #fff;

  &:hover {
    background: #477dae;
  }
}
</style>
