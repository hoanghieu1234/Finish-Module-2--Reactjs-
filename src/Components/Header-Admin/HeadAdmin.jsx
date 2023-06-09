import React from "react";

const HeadAdmin = () => {
  return (
    <div id="page-content-wrapper">
      {/* Top navigation*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid">
          <button className="fa-solid fa-list" id="sidebarToggle" />
          <div className="item-search">
            <input
              type="search"
              name=""
              id="input-search"
              placeholder="Tìm Kiếm"
              onclick="handleSearch(this.value)"
            />
            <i className="fas fa-search" />
          </div>
          <i
            className="fa-solid fa-plus"
            onclick="handleCreate()"
            style={{ cursor: "pointer", fontSize: 25 }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <div className="box-letter">
                  <a className="nav-link" href="#!">
                    <i className="fa-regular fa-envelope" />
                  </a>
                  <span className="item-letter">1</span>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Xin chào Hiếu!
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#!">
                    Action
                  </a>
                  <a className="dropdown-item" href="#!">
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#!">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Page content*/}
      <table className="table" id="table_books_admin">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name Product</th>
            <th scope="col">Price Product</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <img src="" alt="" srcSet="" />
            </td>
            <td>Otto</td>
            <td>@mdo</td>
            <td id="icon-action">
              <i className="fa-solid fa-plus" />
              <i className="fa-solid fa-delete-left" />
              <i className="fa-solid fa-pen-to-square" />
            </td>
          </tr>
        </tbody>
      </table>
      {/* form-edit */}
      <div className="form-edit">
        <form action="/">
          <i className="fa-solid fa-xmark" />
          <div>
            <input type="text" id="id-user" hidden="" />
          </div>
          <label htmlFor="avatar">Image</label>
          <input type="file" id="avatar" name="avatar" />
          <label htmlFor="namebook">Name Book</label>
          <input
            type="text"
            id="namebook"
            name="namebook"
            placeholder=" name book.."
          />
          <label htmlFor="pricebook">Price Book</label>
          <input
            type="number"
            id="pricebook"
            name="pricebook"
            placeholder=" price book.."
          />
          <input
            type="button"
            defaultValue="Submit"
            id="inputUpdate"
            onclick="handelUpdate()"
          />
        </form>
      </div>
    </div>
  );
};

export default HeadAdmin;
