import axios from 'axios'

const request = axios.create({
    // 基础路径
    baseURL: 'http://ttapi.research.itcast.cn/'
})

// 导出
export default request
