import React, { useEffect } from "react";
import SidebarAdmin from "../SideBar-Admin/sidebarAdmin";
import "./Manager_user.css";
import UseAPI from "../../API/UserAPI";

const Manager_user = () => {
  const [users, setUsers] = React.useState(null);
  const [call, SetCall] = React.useState(true);
  useEffect(() => {
    const handleCallUser = async () => {
      const data = await UseAPI.getAllUser();
      console.log(data);
      setUsers(data);
    };

    if (call) {
      handleCallUser();
    }

    return () => {
      SetCall(false);
    };
  }, [call]);
  const filteredUsers = users?.filter((user) => {
    return user.role === 2;
  });

  const handleDelete = async (id) => {
    console.log("id", id);
    const dt = await UseAPI.deleteUser(id);
    dt && SetCall(true);
  };
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
            {filteredUsers?.map((user, index) => {
              return (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {/* More user rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manager_user;
