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




// SCHOOOL
const schoolGetStudents = () => {
    return api.get('/school/students');
}

const schoolAcceptStudent = (studId: any) => {
    return api.post(`/school/student/accept/${studId}`, {student_status: 'accepted'});
}

const schoolRejectStudent = (studId: any) => {
    return api.post(`/school/student/reject/${studId}`, {student_status: 'rejected'});
}

const schoolSuspendStudent = (studId: any) => {
    return api.post(`/school/student/suspend/${studId}`, {student_status: 'suspended'});
}

export {
    getStudentsClasses,
    joinClass,
    getCourseContent,
    getAcceptedClasses,
    getStudentSolutions,
    submitFollowupSolution,
    getAllStudentSolutions,
    studentGetPassExams,
    schoolGetStudents,
    schoolAcceptStudent,
    schoolRejectStudent,
    schoolSuspendStudent
}

