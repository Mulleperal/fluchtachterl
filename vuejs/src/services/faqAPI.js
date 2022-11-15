import API from './api'

export default {
    getFaq() {
        return API().get('/faq')
    }
}
