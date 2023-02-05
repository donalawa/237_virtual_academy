import api from "./apiClient";

const schoolGetAcceptedStudents = () => {
    return api.get('/school/students/all');
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

export {
    schoolGetAcceptedStudents,
    schoolGetAcceptedTeachers,
    schoolCreateTimetable,
    schoolGetAllTimetables
}

