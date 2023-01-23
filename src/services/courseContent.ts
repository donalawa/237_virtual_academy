import api from "./apiClient";

const createCourseContent = (data: any) => {
    return api.post('/create-class', data);
}

const getCourseContents = (courseId: any) => {
    return api.get('/classes');
}

const deleteCourseContent = (id: any) => {
    return api.delete(`/class/${id}`)
}


export {
    createCourseContent,
    getCourseContents,
    deleteCourseContent
}

