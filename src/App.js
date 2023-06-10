import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/auth";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import CourseDetails from "./Pages/CourseDetails/CourseDetails";
import UploadImg from "./Components/uploadImage/UploadImg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleCallApiCourseNew } from "./redux/reducer/courseNewSlice";
import RouteCourse from "./Pages/RouteCourse/RouteCourse";
import CourseOnline from "./Pages/CourseOnline/CourseOnline";
import LearnCouse from "./Pages/LearnCourse/LearnCouse";
import MyCourse from "./Pages/myCourse/MyCourse";
import MyOfCourse from "./Pages/myCourse/MyCourse";
import AuthAdmin from "./Pages/AuthAdmin/AuthAdmin";
import Manager_user from "./Components/manager_user/Manager_user";
import ManagerCourse from "./Components/Manager_Course/ManagerCourse";
import RequiredAuth from "./Components/RequiredAuth/Required";
import RequiredAdmin from "./Components/RequiredAuth/Required";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleApi = async () => {
      await dispatch(handleCallApiCourseNew()).unwrap();
    };

    handleApi();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
        <Route path="/roadmap-list" element={<RouteCourse />} />
        <Route path="/course-list" element={<CourseOnline />} />
        <Route path="/mycourse/learn" element={<LearnCouse />} />
        <Route path="/mycourse" element={<MyOfCourse />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<RequiredAdmin />}>
          <Route path="/admin" element={<AuthAdmin />}>
            <Route path="" index element={<ManagerCourse />} />
            <Route path="manager-user" element={<Manager_user />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
