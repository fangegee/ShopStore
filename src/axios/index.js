import axios from 'axios'
import Qs from 'qs'
// import store from '../store'

axios.defaults.baseURL = 'http://cmsjapi.ffquan.cn/'

axios.interceptors.request.use(config => {
  config.params = Object.assign({

  }, config.params)
  config.data = Qs.stringify(config.data);
  return config
}, err => {
  return Promise.reject(err)
})

export default axios
