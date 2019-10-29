import axios from 'axios'
const baseURL = process.env.lojaApiUrl
const instance = axios.create()
export default {
    getProducts () {
        return instance({
            method: 'get',
            baseURL,
            url: `5db771423b00006e0035eb48`,
            responseType: 'json',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
    }
}