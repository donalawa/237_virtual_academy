import api from "./apiClient";


const getPassExamContents = () => {
    return api.get('/pass-exams');
}

const addPassExamContent = (data: any) => {
    return api.post('/pass-exam', data);
}

const deletePassExamContent = (id: any) => {
    return api.delete(`/pass-exam/${id}`);
}

export {
    getPassExamContents,
    addPassExamContent,
    deletePassExamContent
}