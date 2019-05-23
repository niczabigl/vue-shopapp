import axios from 'axios'
import { IMAGEHOST } from './Config'

function makeGetRequest () {
  return new Promise((resolve, reject) => {
    axios
      .get(IMAGEHOST).then((response) => {
        resolve(response)
      })
      .catch((e) => {
        reject(e)
      })
  })
}

export {
  makeGetRequest
}
