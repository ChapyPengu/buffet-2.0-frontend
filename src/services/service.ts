import axios from "axios"
import { API_URL } from "../config/config"
import { Meal } from "../types"

const instance = axios.create({
  baseURL: API_URL
})

class Service {

  static async getChefsRecommendation() {
    const response = await instance.get<Meal[]>('/meal/chefs-recommendation')
    return response
  }

  static async postReserve() {
    const response = await instance.post('')
    return response
  }

  static async postLogin(username: string, password: string) {
    const response = await instance.post('/auth/login', {
      username,
      password
    })
    return response
  }

  static async postRegister(username: string, password: string) {
    const response = await instance.post('/auth/register', {
      username,
      password
    })
    return response
  }

  static async postLogout() {
    const response = await instance.post('/auth/logout')
    return response
  }

  static async postVerify() {
    const response = await instance.post('/auth/verify')
    return response
  }
}

export default Service