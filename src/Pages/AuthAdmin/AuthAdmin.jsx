import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { handleCallApiCourseNew } from "../../redux/reducer/courseNewSlice";
import { useDispatch } from "react-redux";

const AuthAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleApi = async () => {
      await dispatch(handleCallApiCourseNew()).unwrap();
    };

    handleApi();
  }, []);
  return <Outlet />;
};

export default AuthAdmin;
