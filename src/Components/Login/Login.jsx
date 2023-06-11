import React, { useEffect, useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/reducer/userSlice";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  // Khi vào trang đăng nhập thì thông tin đăng nhập sẽ đc xoá đi
  useEffect(() => {
    localStorage.removeItem("accessTokenRegister");
    localStorage.removeItem("users");
  }, []);

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();

    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.email !== "" && inputValue.password !== "") {
  
      try {
        const data = await dispatch(login(inputValue)).unwrap();
        data && navigate("/");
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
      if (inputValue.email === "") {
        setErrEmail(true);
      }
      if (inputValue.password === "") {
        setErrPassword(true);
      }
    }
  };

  return (
    <div className="login_container">
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

      <div className="login-Form">
        <form onSubmit={handleSubmit} id="form-container">
          <div className="login-title">
            <h3>Đăng Nhập</h3>
          </div>
          <div className="login-email">
            <label htmlFor="">Email</label>
            <input
              type="text"
              id="loginForm-email"
              placeholder="Username"
              name="email"
              value={inputValue.email}
              onChange={handleInputChange}
              className={errEmail ? "error" : ''}
            />
            {errEmail && <span className="err-msg">Nhập email của bạn</span>}
          </div>
          <div className="login-password">
            <label htmlFor="">Password</label>
            <input
              type="password"
              id="loginForm-password"
              placeholder="Password"
              name="password"
              value={inputValue.password}
              onChange={handleInputChange}
              className={errPassword ? "error" : ''}
            />
            {errPassword && (
              <span className="err-msg">Nhập password của bạn </span>
            )}
            <i className="fa-sharp fa-solid fa-eye-slash"></i>
          </div>
          <Link to ="/auth/register" className="login-forgot-password">
            <span>Bạn chưa có tài khoản ?</span>
          </Link>
          <button type="submit">Đăng Nhập</button>
          <div className="back-home">
            <i className="fa-sharp fa-solid fa-arrow-left"></i>
            <Link to="/">
              <span>Quay lại trang chủ</span>
            </Link>
          </div>
        </form>
      </div>
      <div className="login-images"></div>
    </div>
  );
};

export default Login;
