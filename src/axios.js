import axios from 'axios'

const port = process.env.SERVER_PORT || 8080
const instance = axios.create({
  baseURL: `http://localhost:${port}`
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token')
  return config
})

export default instance