import axios from 'axios'

const URL = 'https://randomuser.me/api/'

export const randomUserApi = axios.create({
  baseURL: URL,
})
