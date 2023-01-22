import api from "./apiClient";

const createClass = (data: any) => {
    return api.post('/create-class', data);
}

const getClasses = () => {
    return api.get('/classes');
}

const deleteClass = (id: any) => {
    return api.delete(`/class/${id}`)
}


export {
    createClass,
    getClasses,
    deleteClass
}

