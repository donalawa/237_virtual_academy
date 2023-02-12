import { getAcademicYear } from "../utils/storage";
import api from "./apiClient";

const schoolCreateDeadline = (data: any) => {
    return api.post('/school/dead-line', data);
}

const schoolGetDeadlines= () => {
    return api.get('/school/dead-lines');
}

const studentGetDeadlines= () => {
    let academicYear = getAcademicYear();

    return api.get(`/student/dead-lines/${academicYear}`);
}

const schoolDeleteDeadline= (id: any) => {
    return api.delete(`/school/dead-line/${id}`);
}


export {
    schoolCreateDeadline,
    schoolGetDeadlines,
    studentGetDeadlines,
    schoolDeleteDeadline
}
