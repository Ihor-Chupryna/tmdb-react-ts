import axios, { InternalAxiosRequestConfig } from "axios";

import { apiToken, baseURL } from "../constants";

const apiService = axios.create({baseURL});
apiService.interceptors.request.use((request: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = apiToken;
    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

export { apiService }