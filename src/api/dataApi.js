import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000"
})

export const getData = (url) => {
    return api.get(url);
}

export const saveData = (url , payload) => {
    return api.post(url, payload);
}

export const updateData = (url , payload) => {
    return api.put(url, payload);
}

export const removeData = (url) => {
    return api.delete(url);
}