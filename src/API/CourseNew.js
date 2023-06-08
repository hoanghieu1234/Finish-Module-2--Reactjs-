import axiosClient from "./AxiosClient";

class CourseNew {
    static getCourseNew () {
        const url = "NewCourses";
        return axiosClient.get(url);
    } 
}

export default CourseNew;