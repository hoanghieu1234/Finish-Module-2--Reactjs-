import React from "react";
import "./Content.css";
const Content = () => {
  return (
    <div className="home-page-introduce">
      <div className="home-background">
        <img
          src="https://transvelo.github.io/skola-html/5.1/assets/img/illustrations/illustration-7.svg"
          alt=""
        />
      </div>
      <div className="home-page-content">
        <div className="home-page-content-details">
          <div className="home-page-header">
            <div className="title-header">
              <div className="title-custom">
                Tìm Khoá Học
                <span>Phù Hợp</span>
              </div>
              <div className="title-decription">
                Lựa chọn khóa học yêu thích,
                <br />
                cùng nhau học tập, nâng cao trình độ
              </div>
            </div>
            <div className="input-content">
              <input
                type="text"
                id="input-content-id"
                placeholder="Bạn muốn học gì hôm nay?"
              />
              <div className="icon-content">
                <i className="bx bx-search"></i>
              </div>
            </div>
          </div>
          <div className="home-page-img">
            <img
              src="https://transvelo.github.io/skola-html/5.1/assets/img/illustrations/illustration-5.png"
              alt=""
              className="home-page-content-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
