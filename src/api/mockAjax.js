import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const service = axios.create({
    baseURL: '/mock',
    // timeout:2000
})


service.interceptors.request.use(config => {
    Nprogress.start()
    return config
})


service.interceptors.response.use(
    response => {
        Nprogress.done()
        return response.data
    },
    error => {
        Nprogress.done()
        alert(error.message || '错误')

        throw error
    }
)

export default service