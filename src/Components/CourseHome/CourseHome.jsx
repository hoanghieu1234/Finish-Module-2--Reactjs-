import React, { useEffect, useState } from "react";
import "./Coursehome.css";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";


const CourseHome = () => {
  const courseNew = useSelector(state => state.courseNew)

  return (
    <div className="course-home-page">
      <div className="course-home-content">
        <div className="course-content">
          <h4>Những Khoá Học Mới Nhất</h4>
        </div>
        <div className="view-all-course">
          <a href="//">
            <span>Xem Tất Cả</span>
          </a>
        </div>
      </div>
      <div className="slider-course-home">
        {courseNew.map((course) => (
          <Link to={`/course-details/${course?.id}`} className="box-course-home" key={course?.id}>
            <div className="course-item-img">
              <img src={course?.image} alt="" />
            </div>
            <div className="course-item-content">
              <div className="course-item-title">
                <h5>{course?.namecourse}</h5>
              </div>
              <div className="course-item-level">
                <span className="course-level-1"></span>
                <span className="course-level"></span>
                <span className="course-level"></span>
                <div className="level-name">Beginner</div>
              </div>
              <div className="course-item-footer">
                <div className="item-footer">
                  <i className="bx bx-book-open"></i>
                  <span>{course.lesson}</span>
                </div>
                <div className="item-footer">
                  <i className="bx bx-time"></i>
                  <span>{course.hours}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseHome;
