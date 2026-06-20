import axios from 'axios'

const API = axios.create({
  baseURL: 'https://shop-zone-backend-2zbq.onrender.com/api',
})

export const getProducts = () => API.get('/products')
export const getProductById = (id) => API.get(`/products/${id}`)