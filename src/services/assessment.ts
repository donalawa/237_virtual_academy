import api from "./apiClient";

const createAssessment = (data: any) => {
    return api.post(`/assessment`, data);
}

const getAssessments = () => {
    return api.get('/assessment');
}

const studentAssessment = (classId: any) => {
    return api.get(`/student/assessment/${classId}`);
}

const deleteAssessments = (id: any) => {
    return api.delete(`/assessment/${id}`)
}


export {
    createAssessment,
    getAssessments,
    studentAssessment,
    deleteAssessments
}   

