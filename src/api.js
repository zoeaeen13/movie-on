import axios from 'axios'

const clintId = 'ZPnrkzQxlT7lJa2xaoi9cCGUARFY3UrD6_wUdMB8ZYE'

const API = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Client-ID ${clintId}`
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


export const getPhotos = () => API.get('/search/photos?query=movie', { per_page: 20 })