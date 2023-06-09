import React from "react";
import SidebarAdmin from "../SideBar-Admin/sidebarAdmin";
import "./Manager_user.css";

const Manager_user = () => {
  return (
    <div className="user-management">
        <SidebarAdmin />
      <div className="main-content">
        <h2>Management User</h2>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>
                <button className="btn btn-edit">Edit</button>
                <button className="btn btn-delete">Delete</button>
              </td>
            </tr>
            {/* More user rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manager_user;
