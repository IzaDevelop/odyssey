import axios from "axios";
import apiUrl from "./apiUrl";

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
})

// api.interceptors.request.use(async config => {
//     const tokenLoggedUser = localStorage.getItem("tokenLoggedUser") || undefined;

//     if (tokenLoggedUser) {
//         config.headers.Authorization = `Bearer ${tokenLoggedUser}`
//     }

//     config.headers['Accept-Language'] = 'pt-BR'

//     return config
// })

export default api