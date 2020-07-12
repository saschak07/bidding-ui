import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://bidding-service.herokuapp.com'
   //baseURL: 'http://localhost:9000'
})

export default instance;