import React, { useState } from "react";
import SidebarAdmin from "../SideBar-Admin/sidebarAdmin";
import "./ManagerCourse.css";
import { useDispatch, useSelector } from "react-redux";
import CourseNew from "../../API/CourseNew";
import { handleCallApiCourseNew } from "../../redux/reducer/courseNewSlice";

const ManagerCourse = () => {
  const [showEdit, setShowEdit] = useState(false);
  const courses = useSelector((state) => state.courseNew);
  const dispatch = useDispatch();

  // Xoá sản phẩm từ admin
  const handleDelete = (id) => {
    CourseNew.delete(id).then(() => {
      dispatch(handleCallApiCourseNew()).unwrap();
    });
  };

  const toggleForm = () => {
    setShowEdit(!showEdit);
  };

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý dữ liệu form tại đây
    setShowEdit(false);
  };

  return (
    <div className="management-course">
      <SidebarAdmin />
      <div className="main-content">
        <h2>Manager Course</h2>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
              return (
                <tr>
                  <td key={course.id}>{course.id}</td>
                  <td>{course.namecourse}</td>
                  <td>
                    <img src={course.image} alt="" srcset="" />
                  </td>
                  <td>
                    <button className="btn btn-edit" onClick={toggleForm}>
                      Edit
                    </button>
                    {showEdit && (
                      <form onSubmit={handleSubmit} className="my-form">
                        <div className="form-group">
                          <label htmlFor="name">Tên:</label>
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="image">Ảnh:</label>
                          <input
                            type="file"
                            id="image"
                            value={image}
                            onChange={handleImageChange}
                          />
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    )}
                    <button className="btn btn-add">Add</button>
                    <button
                      onClick={() => handleDelete(course.id)}
                      className="btn btn-delete"
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

export default ManagerCourse;
