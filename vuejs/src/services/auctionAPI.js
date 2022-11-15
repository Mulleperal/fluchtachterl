import API from './api'

export default {
    getAuctions() {
        return API().get('/auctions')
    }
}
