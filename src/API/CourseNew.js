import axiosClient from "./AxiosClient";

class CourseNew {
    static getCourseNew () {
        const url = "NewCourses";
        return axiosClient.get(url);
    } 
    static delete (id) {
        const url = `NewCourses/${id}`;
        return axiosClient.delete(url)
    }
}

export default CourseNew;