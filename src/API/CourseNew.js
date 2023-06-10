import axiosClient from "./AxiosClient";

class CourseNew {
  static getCourseNew() {
    const url = "NewCourses";
    return axiosClient.get(url);
  }
  static delete(id) {
    const url = `NewCourses/${id}`;
    return axiosClient.delete(url);
  }
  static postCourse(param) {
    const url = "NewCourses";
    return axiosClient.post(url, param);
  }
  static patchCourse(param) {
    const url = `NewCourses/${param.id}`;
    return axiosClient.patch(url, param);
  }
}


export default CourseNew;
