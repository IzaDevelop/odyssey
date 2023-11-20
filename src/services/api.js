import axios from "axios";
import apiUrl from "./apiUrl";

const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Origin': '*'
    },
})

export default api