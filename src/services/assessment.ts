import { getAcademicYear } from "../utils/storage";
import api from "./apiClient";

const createAssessment = (data: any) => {
    return api.post(`/assessment`, data);
}

const updateAssessment = (id: any, data: any) => {
    return api.post(`/assessment/${id}`, data);
}

const getAssessments = () => {
    let accademicYear = getAcademicYear();

    return api.get(`/assessments/${accademicYear}`);
}

const getClassAssessments = (classId: any)  => {
    let accademicYear = getAcademicYear();

    return api.get(`/assessments/${classId}/${accademicYear}`);
}

const studentGetAssessments = (classId: any) => {
    return api.get(`/student/assessment/${classId}`);
}

const deleteAssessment = (id: any) => {
    return api.delete(`/assessment/${id}`)
}

const submitAssessmentSolution = (data: any) => {
    return api.post('/student/assessment', data);
} 

const submitAssessmentScore = (assessmentSolId: any, data: any) => {
    return api.post(`/assessment/score/${assessmentSolId}`, data)
}

const getAllAssessmentSolutions = (assessmentId: any) => {
    return api.get(`/assessment/solutions/${assessmentId}`);
}

const getStudentsAssessmentSolutions = () => {
    return api.get('/student/assessment/solutions');
}

const getTotalAssessments = (classId: any) => {
    return api.get(`/student/total/assessment/${classId}`)
}


export {
    createAssessment,
    getAssessments,
    studentGetAssessments,
    deleteAssessment,
    submitAssessmentSolution,
    getAllAssessmentSolutions,
    getStudentsAssessmentSolutions,
    getTotalAssessments,
    getClassAssessments,
    submitAssessmentScore,
    updateAssessment
}   

