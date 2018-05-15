import { tours } from '../static/data/data.json'
import { attractions } from '../static/data/top-attractions.json'
import { timeOut } from '../utils'

class AttractionService {
  /* simulate an api call */
  static getAttractions (searchTerm) {
    const time = timeOut()

    return new Promise((resolve, reject) => {
      return setTimeout(resolve.bind(null, tours), time)
    }).then(response => {
      return response.filter(e => e.title.toLowerCase().includes(searchTerm.toLowerCase()))
    })
  }

  static getTopAttractions (searchTerm) {
    return new Promise((resolve, reject) => {
      return setTimeout(resolve.bind(null, attractions), 0)
    })
  }
}

export default AttractionService
