import api from "./apiConfig.js";

export const signUp = async (credentials) => {
    try {
        const res = await api.post("/singup", credentials)
        localStorage.setItem('token', res.data.token)
        const user = (res.data.token)
        return res.data
    } catch (error) {
        throw error
    }
}