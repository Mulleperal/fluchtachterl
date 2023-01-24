import axios from 'axios'
import PocketBase from 'pocketbase'
// export default(url='http://127.0.0.1:8080/api/v1') => {
//     return axios.create({
//         baseURL: url
//     })
// }

export default(url='http://127.0.0.1:8090/api/collections') => {
    return axios.create({
        baseURL: url
    })
}


export const pb = new PocketBase('http://127.0.0.1:8090')

// const resultList = await pb.collection('auction').getList(1, 50, {
//     filter: 'created >= "2022-01-01 00:00:00" && someField1 != someField2',
// });

