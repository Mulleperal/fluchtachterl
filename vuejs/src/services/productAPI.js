import API from './api'

export default {
    getProducts() {
        return API().get('/products')
    }
}
