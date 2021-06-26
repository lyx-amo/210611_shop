/* 对axios进行二次包装
1. 配置通用的基础路径和超时
2. 显示请求进度条
3. 成功返回的数据不再是response, 而直接是响应体数据response.data
4. 统一处理请求错误, 具体请求也可以选择处理或不处理 */
import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const service = axios.create({
    baseURL: '/api',
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