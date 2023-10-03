import axios from "axios";
import apiUrl from "./apiUrl";

const api = axios.create({
    baseURL: apiUrl,
})

api.interceptors.request.use(async config => {
    const tokenLoggedUser = localStorage.getItem("tokenLoggedUser") || undefined;

    if (tokenLoggedUser) {
        config.headers.Authorization = `Bearer ${tokenLoggedUser}`
    }

    config.headers['Accept-Language'] = 'pt-BR'

    return config
})

export default api