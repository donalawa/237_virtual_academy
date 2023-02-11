import { getAcademicYear } from "../utils/storage";
import api from "./apiClient";


const createStudentResults = (studentId: any, data:any) => {
    let academicYear = getAcademicYear();

    return api.post(`/school/student-result/${studentId}/${academicYear}`, data);
}



export {
    createStudentResults
}
