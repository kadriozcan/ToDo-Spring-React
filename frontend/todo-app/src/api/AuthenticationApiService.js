import { apiClient } from "./ApiClient";


export const getBasicAuthService = (token) => apiClient.get(`/basicauth`, {
    headers: {
        Authorization: token
    }
})

export const getJWTAuthService = (username, password) => apiClient.post(`/authenticate`, { username, password })