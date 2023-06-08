import React, { useState } from "react";
import "./MyCourse.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyCourse = () => {
  const myCourse = useSelector((state) => state.mycourse);
  const userLogin = JSON.parse(localStorage.getItem("users"));

  const myCourses = myCourse.find((course) => course.userId === userLogin.id);
  console.log(131, myCourses?.myCourse);
  const courseCount = myCourses?.myCourse?.length || 0; // Lấy độ dài của khoá học
  // console.log("state của my-course", myCourse);

  const [searchTerm, setSearchTerm] = useState(""); // Trạng thái để lưu giá trị từ ô tìm kiếm

  const filteredCourses = myCourses?.myCourse?.filter((course) =>
    course.namecourse.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Cập nhật giá trị từ ô tìm kiếm
  };

  return (
    <div className="my-course">
      <h1>Khoá học của tôi</h1>
      <div className="my-course-filter">
        <div>
          <span>Rikkei Academy</span> có <span>{courseCount}</span> cho bạn
        </div>
        <div className="my-filter-item">
          <input
            type="text"
            placeholder="Tìm kiếm khoá học"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <i className="bx bx-search"></i>
        </div>
      </div>
      <div className="my-learn-course">
        {filteredCourses &&
          filteredCourses.map((item) => {
            return (
              <div className="my-box" key={item?.id}>
                <div className="mycourse-item-image">
                  <img src={item?.image} alt="" />
                </div>
                <div className="mycourse-item-icon">
                  <h5>{item?.namecourse}</h5>
                  <p>
                    Chương trình Kỹ Sư CNTT Nhật Bản chất lượng cao giúp học
                    viên làm chủ các kiến thức lập trình.
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default MyCourse;
