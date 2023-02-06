import api from "./apiClient";

const schoolGetAcceptedStudents = () => {
    return api.get('/school/students/all');
}

const schoolAcceptTeachersRequest = (id: any) => {
    // alert(id);
    return api.post(`/school/teacher/accept/${id}`, {status: 'accepted'})
}

const schoolRejectTeachersRequest = (id: any) => {
    return api.post(`/school/teacher/reject/${id}`, {status: 'rejected'});
}

const schoolGetAcceptedTeachers = () => {
    return api.get('/school/teachers/all');
}

const schoolCreateTimetable = (data: any) => {
    return api.post('/school/timetable', data);
}

const schoolGetAllTimetables = () => {
    return api.get('/school/timetables');
}

const schoolCreateAcademicYear = (data: any) => {
    return api.post('/school/academic-year', data);
}

const schoolStopAcademicYear = (id: any) => {
    return api.post('/school/stop/academic-year')
}


const schoolGetAcademicYears = () => {
    return  api.get('/school/academic-years');
}

export {
    schoolGetAcceptedStudents,
    schoolGetAcceptedTeachers,
    schoolCreateTimetable,
    schoolGetAllTimetables,
    schoolCreateAcademicYear,
    schoolGetAcademicYears,
    schoolStopAcademicYear,
    schoolAcceptTeachersRequest,
    schoolRejectTeachersRequest
}

