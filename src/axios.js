import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://bidding-service.herokuapp.com'
})

export default instance;