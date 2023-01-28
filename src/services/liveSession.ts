import api from "./apiClient";

const createSession = (data: any) => {
    return api.post(`/session/create`, data);
}


const endSession = (data: any) => {
    console.log('DATA: end: ', data);
    return api.post(`/session/end`, data);
}

const getAllSessions= () => {
    return api.get('/sessions');
}

const joinSession = (data: any) => {
    return api.post('/session/join', data);
}


export {
    createSession,
    endSession,
    getAllSessions,
    joinSession
}

