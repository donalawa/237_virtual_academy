import api from "./apiClient";

const getStudentsClasses = () => {
    return api.get('/applications/student');
}

const getAcceptedClasses = () => {
    return api.get('/student/classes');
}

const joinClass = (data: any) => {
    return api.post('/applications', data);
}

const getCourseContent = (id: any) =>  {
    return api.get(`/course-contents/student/${id}`);
}

const submitAssignmentSolution = (data: any) => {
    return api.post(`/solution`, data);
}

const getStudentSolutions = () => {
    return api.get('/student/solutions');
}

const getAllStudentSolutions = (courseContentId: any) => {
    return api.get(`/solutions/${courseContentId}`)
}

export {
    getStudentsClasses,
    joinClass,
    getCourseContent,
    getAcceptedClasses,
    getStudentSolutions,
    submitAssignmentSolution,
    getAllStudentSolutions
}

