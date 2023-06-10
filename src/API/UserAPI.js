import  axiosClient  from "./AxiosClient";

class UseAPI {
  static register(param) {
    const url = "register";
    return axiosClient.post(url, param);
  }

  static login(param) {
    const url = "login";
    return axiosClient.post(url, param);
  }

  static getAllUser() {
    const url = "users"
    return axiosClient.get(url)
  }

  static deleteUser(id) {
    const url = `users/${id}`
    return axiosClient.delete(url)
  }
}

export default UseAPI;
