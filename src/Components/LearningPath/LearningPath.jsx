import React from "react";
import "./LearningPath.css";
import { Link } from "react-router-dom";

const LearningPath = () => {
  return (
    <section className="learningpath">
      <div className="learning-path-title">
        <h4>Lộ Trình Phổ Biến</h4>
      </div>
      <div className="learning-path-course">
        {/* course1 */}
        <div className="course">
          <div className="path-img">
            <img src="images/reactjs.png" alt=""  />
          </div>
          <div className="path-content">
            <div className="path-content-title">
              <h5>Web Front-End-ReactJs V2.0</h5>
            </div>

            <div>
              <i className="bx bxs-time"></i>
              <span>192 giờ</span>
            </div>
            <div>
              <i className="bx bxs-graduation"></i>
              <p>Chương trình đào tạo fullstack dành cho những ai...</p>
            </div>
          </div>
          <div className="path-index-course">
            <span>
              06 <br /> khoá học
            </span>
          </div>
        </div>
        {/* course2 */}
        <div className="course">
          <div className="path-img">
            <img src="images/reactjs.png" alt="" />
          </div>
          <div className="path-content">
            <div className="path-content-title">
              <h5>Web Front-End-ReactJs V2.0</h5>
            </div>

            <div>
              <i className="bx bxs-time"></i>
              <span>192 giờ</span>
            </div>
            <div>
              <i className="bx bxs-graduation"></i>
              <p>Chương trình đào tạo fullstack dành cho những ai...</p>
            </div>
          </div>
          <div className="path-index-course">
            <span>
              06 <br /> khoá học
            </span>
          </div>
        </div>
        {/* course3 */}
        <div className="course">
          <div className="path-img">
            <img src="images/reactjs.png" alt="" />
          </div>
          <div className="path-content">
            <div className="path-content-title">
              <h5>Web Front-End-ReactJs V2.0</h5>
            </div>

            <div>
              <i className="bx bxs-time"></i>
              <span>192 giờ</span>
            </div>
            <div>
              <i className="bx bxs-graduation"></i>
              <p>Chương trình đào tạo fullstack dành cho những ai...</p>
            </div>
          </div>
          <div className="path-index-course">
            <span>
              06 <br /> khoá học
            </span>
          </div>
        </div>
        {/* course4 */}
        <div className="course">
          <div className="path-img">
            <img src="images/reactjs.png" alt="" />
          </div>
          <div className="path-content">
            <div className="path-content-title">
              <h5>Web Front-End-ReactJs V2.0</h5>
            </div>

            <div>
              <i className="bx bxs-time"></i>
              <span>192 giờ</span>
            </div>
            <div>
              <i className="bx bxs-graduation"></i>
              <p>Chương trình đào tạo fullstack dành cho những ai...</p>
            </div>
          </div>
          <div className="path-index-course">
            <span>
              06 <br /> khoá học
            </span>
          </div>
        </div>
      </div>
      <div className="all-course">
        <div className="link-all-course">
          <Link to="/roadmap-list">
            <strong>Xem tất cả</strong>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
