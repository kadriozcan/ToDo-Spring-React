import axios from "axios";


const apiClient = axios.create({
    baseURL: "http://localhost:8080"
})

export const getHello = () => apiClient.get("/hello")

export const getHelloPathVariable = (username) => apiClient.get(`/hello/${username}`)