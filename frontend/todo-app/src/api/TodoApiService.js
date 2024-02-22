import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
)

export const getAllTodosApi = (username) => apiClient.get(`/users/${username}/todos`)

export const getTodoByUsernameAndId = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)

export const deleteTodoApi = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)