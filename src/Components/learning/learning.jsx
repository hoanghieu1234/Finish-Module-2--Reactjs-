import React, { useEffect } from "react";
import "./learning.css";
import { useNavigate } from "react-router-dom";

const Learning = () => {
  const checkLogin = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();
  useEffect(() => {
      if(!checkLogin) {
        navigate('/auth/login');
      }
  },[]);
  return (
    <div className="learning-lesson">
      {/* nav */}
      <nav>
        <div className="learn-nav-left">
          <div>
            <i className="bx bxs-file-blank"></i>
          </div>
          <div>
            <h5>Web Front-end with ReactJs</h5>
          </div>
        </div>
        <div className="learn-nav-right">
          <div className="nav-right">
            <div className="nav-right-item">
              <i className="bx bxs-badge-check"></i>
              <p>Chương: 16</p>
            </div>
          </div>

          <div className="nav-right">
            <div className="nav-right-item">
              <i className="bx bxs-file-export"></i>
              <p>Kiểm tra đã nộp</p>
            </div>
          </div>

          <div className="nav-right">
            <div className="nav-right-item">
              <i className="bx bx-question-mark"></i>
              <p>Hướng dẫn</p>
            </div>
          </div>
        </div>
      </nav>
      {/* scroll */}
      <div className="learning-less-content">
        <div className="learning-left-lesson">
          <div className="leaning-image-container">
            <img
              src="https://blog.freec.asia/wp-content/uploads/2022/06/python-roadmap.jpg"
              alt=""
           
            />
          </div>
        </div>
        <div className="learning-right-lesson">
          <div className="learning-right-title">
            <h3 id="dropdown-heading">Nội dung bài học</h3>
            <div className="lesson-prepare">
              <h4>[Chuẩn bị] Session 01 - ReactJS overview</h4>
              <ul className="dropdown-content">
                <li>
                  <a href="">Tổng quan về ReactJS</a>
                </li>
                <li>
                  <a href="">Cài đặt môi trường</a>
                </li>
                <li>
                  <a href="">Cài đặt React.js</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
