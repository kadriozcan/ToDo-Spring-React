import { apiClient } from "./ApiClient"

export const getHello = () => apiClient.get("/hello")

export const getHelloPathVariable = (username, token) => apiClient.get(`/hello/${username}`, {
    headers: {
        Authorization: token
    }
})

export const getBasicAuthService = (token) => apiClient.get(`/basicauth`, {
    headers: {
        Authorization: token
    }
})