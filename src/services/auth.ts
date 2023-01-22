import api from "./apiClient";

const registerUser = (data: any) => {
    return api.post('/signup/user', data);
}

export  default {
    registerUser
}