import api from "./apiClient";

const createCourseContent = (data: any) => {
    return api.post('/course-content', data);
}

const getCourseContents = () => {
    return api.get('/course-contents');
}

const deleteCourseContent = (id: any) => {
    return api.delete(`/class/${id}`)
}


export {
    createCourseContent,
    getCourseContents,
    deleteCourseContent
}

