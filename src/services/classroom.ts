import { getAcademicYear } from "../utils/storage";
import api from "./apiClient";

const createClass = (data: any) => {
    return api.post('/create-class', data);
}

const getClasses = () => {
    let academicYear  = getAcademicYear();

    return api.get(`/classes/${academicYear}`);
}

const getTeachersClassReq = () => {
    let academicYear = getAcademicYear();
    return api.get(`/school/class-request/${academicYear}`);
}

const deleteClass = (id: any) => {
    return api.delete(`/class/${id}`)
}


export {
    createClass,
    getClasses,
    deleteClass,
    getTeachersClassReq
}

