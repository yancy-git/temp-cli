import axios from 'axios';

// 环境切换
const axiosInstance = axios.create({
	baseURL: process.env.VUE_APP_BASE_URL,
	// baseURL: 'http://127.0.0.1:8035/api/',
    timeout: 30000
})
// console.info(process.env.VUE_APP_BASE_URL)
// post请求头的设置
axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 封装方法
export default {
    get(url, params) {
        return axiosInstance({
			method: 'get',
			url: url,
			params
		})
    },
    post(url, data, params) {
        return axiosInstance({
			method: 'post',
			url: url,
			params,
			data: data
		})
    }
}
