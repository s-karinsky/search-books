import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  params: {
    key: process.env.REACT_APP_API_KEY 
  }
})

export default instance