import MemeAPI from '@/service/memeapi'

export default class {
  constructor (view) {
    this.view = view
    this.joke = ''
    this.page = 0
    this.memes = []
    this.keyword = ''
    this.loading = true
  }
  async init () {
    for (let i = 0; i < 5; i++) {
      this.memes = this.memes.concat(await MemeAPI.getByPopular(this.page))
      this.page += 1
      this.loading = false
    }
  }
  searchByKeyword = async () => {
    this.loading = true
    this.page = 0
    this.memes = []
    if (!this.keyword) {
      return this.init()
    }
    for (let i = 0; i < 5; i++) {
      const memes = this.memes.concat(await MemeAPI.getByKeyword(this.keyword, 0))
      this.memes = memes.filter((meme, index, array) =>
        index === array.findIndex((t) => (
          t.generatorID === meme.generatorID
        ))
      )
      this.page += 1
      this.loading = false
    }
  }
}
