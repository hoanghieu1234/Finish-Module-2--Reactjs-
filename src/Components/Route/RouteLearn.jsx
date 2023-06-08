import React from "react";
import "./RouteLearn.css";
import { Link } from "react-router-dom";

const RouteLearn = () => {
  return (
    <div className="route-learn">
      <h1>Lộ Trình</h1>
      <div className="course-filter">
        <div>
          <span>Rikkei Academy</span> sẵn có <span>5 lộ trình</span> cho bạn
        </div>
        <div className="filter-item">
          <input type="text" placeholder="Tìm kiếm khoá học" />
          <i class="bx bx-search"></i>
        </div>
      </div>
      <div className="route-learn-course">
        <div className="box">
          <div className="roadmap-item-image">
            <img src="/images/java.png" alt="" />
          </div>
          <div className="roadmap-item-icon">
            <h5>Web Fullstack Java Fukuoka</h5>
            <p>
              Chương trình Kỹ Sư CNTT Nhật Bản chất lượng cao giúp học viên làm
              chủ các kiến thức lập trình.
            </p>
          </div>
        </div>
        {/* box-2 */}
        <div className="box">
          <div className="roadmap-item-image">
            <img src="/images/java.png" alt="" />
          </div>
          <div className="roadmap-item-icon">
            <h5>Web Fullstack Java Fukuoka</h5>
            <p>
              Chương trình Kỹ Sư CNTT Nhật Bản chất lượng cao giúp học viên làm
              chủ các kiến thức lập trình.
            </p>
          </div>
        </div>
        {/* box3 */}
        
      </div>
    </div>
  );
};

export default RouteLearn;
