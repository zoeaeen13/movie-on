import axios from 'axios'

const API = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false,
    validateStatus: (status) => {
        return status >= 200 && status <= 500
    }
})

API.interceptors.request.use((config) => {
    return config
}, (err) => {
    return Promise.reject(err)
})

// Add a response interceptor
API.interceptors.response.use(function (response) {
    if (response.status !== 200) {
        const errorMessage = response.data.message || response.data.msg
        console.error(`url:${response.request.responseURL} error`, `errorMessage:${errorMessage}`, `status code:${response.status}`)
    }
    return response
}, function (error) {
    console.error(error)
    error.response && console.error(error.response.request.responseURL, error)
    return Promise.reject(error)
})

export const getMovies = (params) => API.get('/api/movie/', { params })
export const getMovieDetail = (id) => API.get(`api/detail/${id}`)
export const getRecommends = (id) => API.get(`api/movie/recommend?&id=${id}`)
export const getMoviesByKeyword = (keyword) => API.get(`api/search/?query=${keyword}`)