import axios from 'axios'
const service = axios.create({
    baseURL: '/mock',
    timeout: 20000
})

export default service