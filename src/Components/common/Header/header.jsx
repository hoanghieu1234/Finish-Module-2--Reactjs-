import React, { useState } from "react";
import "./header.css";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const login = JSON.parse(localStorage.getItem("users"));
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem("users"));
  const location = useLocation();

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
          <a href="/">
            <img
              src={process.env.PUBLIC_URL + "./images/RIKKEI_ACADEMY_LOGO.png"}
              alt=""
              srcSet=""
            />
          </a>
          {/* Navigation */}
          <ul className="ul-nav">
            <li>
              <NavLink exact to="/" activeClassName="active">
                {" "}
                <i className="bx bx-home" style={{ paddingRight: 5 }} />
                Trang Chủ{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/roadmap-list" activeClassName="active">
                <i class="bx bx-outline"></i>
                Lộ trình
              </NavLink>
            </li>
            <li>
              <Link to="/course-list" activeClassName="active">
                <i class="bx bxs-book-open"></i>
                Khoá Học
              </Link>
            </li>
            {userLocal && (
              <li>
                <Link to="/mycourse" activeClassName="active">
                  <i class="bx bxs-book-alt"></i>
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
                <img src="images/RIKKEI_ACADEMY_LOGO.png" alt="" srcset="" />
              </div>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <i class="bx bxs-user"></i>
                    <Link to="/account">Tài khoản</Link>
                  </li>
                  <li>
                    <i class="bx bx-log-in-circle"></i>
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
          {login && <span className="username">{login.email}</span>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
