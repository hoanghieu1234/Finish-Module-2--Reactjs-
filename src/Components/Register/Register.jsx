import React, { useState } from "react";
import "./Register.css";
import { useDispatch } from "react-redux";
import { register } from "../../redux/reducer/userSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errUsername, setErrUsername] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    if (e.target.name === "username" && e.target.value !== "") {
      setErrUsername(false);
    }
    if (e.target.name === "email" && e.target.value !== "") {
      setErrEmail(false);
    }
    if (e.target.name === "password" && e.target.value !== "") {
      setErrPassword(false);
    }
    setInputValue({ ...inputValue, [e.target.name]: e.target.value, role:2 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      inputValue.email !== "" &&
      inputValue.username !== "" &&
      inputValue.password !== ""
    ) {
      try {
        await dispatch(register(inputValue)).unwrap();
        toast.success("Đăng ký thành công!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        
        setTimeout(() => {
          navigate("/auth/login"); // Chuyển hướng sau 2 giây
        }, 2000);
      } catch (error) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      if (inputValue.username === "") {
        setErrUsername(true);
      }
      if (inputValue.email === "") {
        setErrEmail(true);
      }
      if (inputValue.password === "") {
        setErrPassword(true);
      }
    }
  };
  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <div className="forgotPassword_container">
        <div className="forgotPassword-Form">
          <form id="form-forgotPassword" onSubmit={handleSubmit}>
            <div className="forgotPassword-title">
              <h3>Đăng Ký</h3>
            </div>
            <div className="forgotPassword-username">
              <label htmlFor="">Username</label>
              <input
                value={inputValue.username}
                type="text"
                placeholder="Nhập đầy đủ tên của bạn"
                name="username"
                onChange={handleInputChange}
              />
              {errUsername && <span className="err-msg">Nhập họ và tên</span>}
            </div>
            <div className="forgotPassword-email">
              <label htmlFor="">Email</label>
              <input
                value={inputValue.email}
                type="email"
                name="email"
                placeholder="Nhập địa chỉ email của bạn"
                onChange={handleInputChange}
              />
              {errEmail && <span className="err-msg">Nhập email của bạn</span>}
            </div>
            <div className="forgotPassword-password">
              <label htmlFor="">Password</label>
              <input
                value={inputValue.password}
                type="password"
                name="password"
                onChange={handleInputChange}
              />
              {errPassword && (
                <span className="err-msg">Nhập password của bạn</span>
              )}
            </div>
            <button type="submit">Register</button>
            <div className="back-login">
              <i className="fa-sharp fa-solid fa-arrow-left"></i>
              <Link to="/auth/login">
                <span>Quay lại Login</span>
              </Link>
            </div>
          </form>
        </div>
        <div className="forgotPassword-images"></div>
      </div>
    </div>
  );
};

export default Register;
