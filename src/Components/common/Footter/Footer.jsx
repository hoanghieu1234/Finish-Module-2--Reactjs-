import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-section">
        <div className="footer-top">
          <div className="footer-tops-1">
            <div className="footer-row-1">
              <div className="img-footer">
                <img src="images/logo-Rikkei-while.png" alt="" srcset="" />
              </div>
              <div className="title-footer">
                <h3>Để nông dân biết code</h3>
              </div>
            </div>
            <div className="footer-row-2">
              <div className="item">
                <div className="item-1">
                  <i class="bx bxs-phone-call"></i>
                  <p>Điện thoại: 0245678</p>
                </div>
              </div>

              <div className="item">
                <div className="item-2">
                  <i class="bx bx-envelope"></i>
                  <p>Email:Hieunguyenhl123@gmail.com</p>
                </div>
              </div>

              <div className="item">
                <div className="item-3">
                  <i class="bx bx-location-plus"></i>
                  <p>
                    Địa chỉ: Tầng 7 khối A tòa nhà Sông Đà, đường Phạm Hùng ,
                    Phường Mỹ Đình 1, Quận Nam Từ Liêm, Thành phố Hà Nội, Việt
                    Nam
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-row-3">
              <img
                src="https://fullstack.edu.vn/static/media/dmca.2593d9ecf1c982e3c3a2.png"
                alt=""
              />
            </div>
            <div className=""></div>
          </div>
          <div className="footer-tops-2">
            <div className="footer-title-2">
              <h3>Sản phẩm</h3>
            </div>
            <div className="footer-content-2">
              <ul>
                <li>Dành cho người mới bắt đầu</li>
                <li>Dành cho người có nền tản</li>
                <li>Dành cho người muốn đi nhật</li>
              </ul>
            </div>
          </div>
          <div className="footer-tops-3">
            <div className="footer-title-3">
              <h3>Hỗ trợ</h3>
            </div>
            <div className="footer-content-3">
              <ul>
                <li>Liên hệ</li>
                <li>Bảo mật</li>
                <li>Điều khoản</li>
                <li>Cơ hội việc làm</li>
              </ul>
            </div>
          </div>
          <div className="footer-tops-4">
            <div className="footer-title-4">
              <h3>CÔNG TY TNHH RIKKEI EDUCATION</h3>
            </div>
            <div className="footer-content-4">
              <ul>
                <li>
                  Mong muốn của chúng tôi sẽ mang đến thật nhiều cơ hội học tập
                  và làm việc tại Nhật Bản cho các lập trình viên Việt Nam. Đến
                  với Rikkei Academy bạn sẽ không còn cảm thấy lập trình viên là
                  một nghề khó theo đuổi và cần trình độ cao, chỉ cần bạn quyết
                  tâm và nỗ lực chỉ sau 6 tháng ắt bạn sẽ gặt trái ngọt.
                </li>
                <li>Anh Nguyễn Viết Lâm – CEO Rikkei Academy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bot">
          <div className="footer-bot-left">
            <span>
              © 2022 By Rikkei Academy - Rikkei Education - All rights reserved.
            </span>
          </div>
          <div className="footer-bot-right">
            <div className="footer-bot-img">
              <img src="images/fb.png" alt="" />
            </div>
            <div className="footer-bot-img">
              <img src="images/tiktok.png" alt="" />
            </div>
            <div className="footer-bot-img">
              <img src="/images/ytb.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
