import MemeAPI from '@/service/memeapi'

export default class {
  constructor (view) {
    this.view = view
    this.joke = ''
    this.memes = []
    this.keyword = ''
    this.loading = true
  }
  async init () {
    for (let page = 0; page < 5; page++) {
      this.memes = this.memes.concat(await MemeAPI.getByPopular(page))
      this.loading = false
    }
  }
  searchByKeyword = async () => {
    this.loading = true
    this.memes = []
    if (!this.keyword) {
      return this.init()
    }
    this.memes = this.memes.concat(await MemeAPI.getByKeyword(this.keyword, 0))
    this.loading = false
  }
}
