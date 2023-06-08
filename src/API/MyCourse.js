import axiosClient from "./AxiosClient";

class MyCourse {
    static updateCourse (param) {
        const url = "/MyCourses";
        return axiosClient.post(url,param)
    }
    static getCourse() {
        const url ="/MyCourses"
        return axiosClient.get(url)
    }
}

export default MyCourse;