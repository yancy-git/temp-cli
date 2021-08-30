import axios from 'axios';
import router from '@/router/index.js'
import { getToken, setToken, removeToken  } from '../utils/token';


// 环境切换
const axiosInstance = axios.create({
	baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 30000
})
// console.info(process.env.VUE_APP_BASE_URL)
// post请求头的设置
axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


//请求拦截
axiosInstance.interceptors.request.use(
	config => {
		const token = getToken()
		if (token) {
			config.headers.common['J-Token'] = `${token}`
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

//响应拦截
axiosInstance.interceptors.response.use(
	response => {
		let newToken = response.headers['new-token']
		if (newToken) {
			setToken(newToken)
		}
		if(response.data.code === 203){
			removeToken()
			router.push('/login')
		}
		return response
	},
	error => {
		let response = error.response
		if (response.code === 401) {
			removeToken()
			router.push('/login')
		} else if (response.status === 403) {
			router.push({
				name: 'Login'
			})
		}
		return Promise.reject(response)
	}
)


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
