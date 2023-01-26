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



export {
    getStudentsClasses,
    joinClass,
    getCourseContent,
    getAcceptedClasses
}

