import React, { useState } from "react";
import "./header.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const login = JSON.parse(localStorage.getItem("users"));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem("users"));
  const [showList, setShowList] = useState(false);

  console.log({ login });

  // showList 414
  const handleShowList = () => {
    setShowList(!showList);
  };
  // togle đăng xuất
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    // Xử lý đăng xuất tại đây
    // Ví dụ: xóa thông tin đăng nhập khỏi localStorage
    navigate("/auth/login");
    localStorage.removeItem("users");
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="content">
          <Link href="/">
            <img src="./images/RIKKEI_ACADEMY_LOGO.png" alt="" />
          </Link>
          <div id="check-list">
            <i className="bx bx-list-ul" onClick={handleShowList}></i>
          </div>
          <ul className="ul-nav">
            <li>
              <Link to="/">
                <i className="bx bx-home" />
                Trang Chủ
              </Link>
            </li>
            <li>
              <Link to="/roadmap-list">
                <i className="bx bx-outline"></i>
                Lộ trình
              </Link>
            </li>
            <li>
              <Link to="/course-list">
                <i className="bx bxs-book-open"></i>
                Khoá Học
              </Link>
            </li>
            {userLocal && (
              <li>
                <Link to="/mycourse" className={{ isActive: true }}>
                  <i className="bx bxs-book-alt"></i>
                  Khoá học của tôi
                </Link>
              </li>
            )}
          </ul>
        </div>
        {/* Actions */}
        <div className="notify-group">
          {login ? (
            <div className="dropdown">
              <div className="user-avatar" onClick={handleDropdownToggle}>
                <img src="/images/class_cap1.jpg" alt="" />
              </div>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <i className="bx bxs-user"></i>
                    <Link to="/account">Tài khoản</Link>
                  </li>
                  <li>
                    <i className="bx bx-log-in-circle"></i>
                    <Link to="/auth/login" onClick={handleLogout}>
                      Đăng xuất
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <Link to="/auth/login" className="action-link">
              Đăng Nhập
            </Link>
          )}
          {login && <span className="username">{login.username}</span>}
        </div>
      </nav>
      {showList && (
        <div className="overlay" onClick={handleShowList}>
          <div className="wrapper-content">
            <div className="wrapper-header">
              <i class="bx bx-message-x"></i>
            </div>
            <div className="wrapper-body">
              <ul>
                <li>
                  {login ? (
                    <div className="user-avatar" onClick={handleDropdownToggle}>
                      <img src="/images/class_cap1.jpg" alt="" />
                    </div>
                  ) : (
                    <Link to="/auth/login" className="action-link">
                      Đăng Nhập
                    </Link>
                  )}
                  {login && <span className="username">{login.username}</span>}
                </li>

                <li>
                  <i className="bx bx-home" />
                  <Link to={"/"} className="Link">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <i className="bx bx-outline"></i>
                  <Link to={"/roadmap-list"} className="Link">
                    Lộ trình
                  </Link>
                </li>
                <li>
                  <i className="bx bxs-book-open"></i>
                  <Link to={"/course-list"} className="Link">
                    Khoá học
                  </Link>
                </li>
                <li>
                  {userLocal && (
                    <>
                      <i className="bx bxs-book-alt"></i>
                      <Link to={"/mycourse"} className="Link">
                        Khoá học của tôi
                      </Link>
                    </>
                  )}
                </li>
                {login && <li>
                  <i className="bx bx-log-in-circle"></i>
                  <Link
                    to="/auth/login"
                    onClick={handleLogout}
                    className="Link"
                  >
                    Đăng xuất
                  </Link>
                </li>}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
