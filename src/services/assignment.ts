import api from "./apiClient";

const createAssignment = (data: any) => {
    return api.post(`/assignment`, data);
}

const updateAssignment = (id: any, data: any) => {
    return api.post(`/assignment/${id}`, data);
}

const getAssignments = () => {
    return api.get('/assignments');
}

const getClassAssignments = (classId: any)  => {
    return api.get(`/assignment/${classId}`);
}

const studentGetAssignments = (classId: any) => {
    return api.get(`/student/assignment/${classId}`);
}

const deleteAssignments = (id: any) => {
    return api.delete(`/assignment/${id}`)
}

const submitAssignmentSolution = (data: any) => {
    return api.post('/student/assignment', data);
} 

const submitAssignmentScore = (assessmentSolId: any, data: any) => {
    return api.post(`/assignment/score/${assessmentSolId}`, data)
}

const getAllAssignmentSolutions = (assignmentId: any) => {
    return api.get(`/assignment/solutions/${assignmentId}`);
}

const getStudentsAssignmentSolutions = () => {
    return api.get('/student/assignment/solutions');
}

const getTotalAssignments = (classId: any) => {
    return api.get(`/student/total/assignment/${classId}`)
}


export {
    createAssignment,
    getAssignments,
    studentGetAssignments,
    deleteAssignments,
    submitAssignmentSolution,
    getAllAssignmentSolutions,
    getStudentsAssignmentSolutions,
    getTotalAssignments,
    getClassAssignments,
    submitAssignmentScore,
    updateAssignment
}   

