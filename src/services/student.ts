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

const submitFollowupSolution = (data: any) => {
    return api.post(`/followup/solution`, data);
}

const getStudentSolutions = () => {
    return api.get('/followup/student/solutions');
}

const getAllStudentSolutions = (courseContentId: any) => {
    return api.get(`/followup/solutions/${courseContentId}`)
}

const studentGetPassExams = (classId: any) => {
    return api.get(`/students/passexams/${classId}`);
}

export {
    getStudentsClasses,
    joinClass,
    getCourseContent,
    getAcceptedClasses,
    getStudentSolutions,
    submitFollowupSolution,
    getAllStudentSolutions,
    studentGetPassExams
}

