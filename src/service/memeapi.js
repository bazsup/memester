import axios from 'axios'

const memeEndpoint = 'http://version1.api.memegenerator.net/'

export default {
  getRandomMeme () {
    return axios
      .get('https://api.icndb.com/jokes/random')
      .then(response => response.data)
  },
  getByPopular (page = 0) {
    return axios({
      baseURL: memeEndpoint,
      url: 'Generators_Select_ByPopular',
      params: {
        pageIndex: page,
        pageSize: 25,
        apiKey: 'demo'
      }
    })
      .then(response => response.data.result)
  },
  getByKeyword (word = '', page) {
    return axios({
      baseURL: memeEndpoint,
      url: 'Generators_Search',
      params: {
        q: word,
        pageIndex: page,
        pageSize: 25,
        apiKey: 'demo'
      }
    })
      .then(response => response.data.result)
  }
}
