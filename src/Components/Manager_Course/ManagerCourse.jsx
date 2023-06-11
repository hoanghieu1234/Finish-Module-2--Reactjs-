import React, { useEffect, useState } from "react";
import axios from "axios";
import SidebarAdmin from "../SideBar-Admin/sidebarAdmin";
import "./ManagerCourse.css";
import { useDispatch, useSelector } from "react-redux";
import CourseNew from "../../API/CourseNew";
import { handleCallApiCourseNew } from "../../redux/reducer/courseNewSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

const ManagerCourse = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [idEdit, setId] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [courses, setCourse] = useState([]);
  const dataSelector = useSelector((state) => state.courseNew);

  useEffect(() => {
    setCourse(dataSelector);
  }, [dataSelector]);
  // courses từ database
  const dispatch = useDispatch();

  const toggleForm = () => {
    setShowEdit(!showEdit);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Upload file firebase
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (!selectedFile) return;
    const imgref = ref(storage, `images/${selectedFile.name}`);
    uploadBytes(imgref, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log("url", url);
        setFile(url);
      });
    });
  };

  // Tìm kiếm admin
  const handleOnchangeInput = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      const filterInputSearch = dataSelector.filter((course) => {
        return course?.namecourse
          ?.toLowerCase()
          .includes(searchItem.toLowerCase());
      });
      setCourse([...filterInputSearch]);
    }
  };

  // Xoá sản phẩm từ admin
  const handleDelete = (id) => {
    CourseNew.delete(id).then(() => {
      dispatch(handleCallApiCourseNew()).unwrap();
    });
  };

  // Edit sản phẩm từ admin

  const handleEdit = (item) => {
    console.log(item);
    setName(item.namecourse);
    setFile(item.image);
    setId(item.id);
    setShowEdit(true);
    console.log(item.image);
  };
  // Post course cho người dùng
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(idEdit);
    // Tạo đối tượng param để truyền dữ liệu khóa học,fiel của database
    let param;
    if (idEdit) {
      param = {
        id: idEdit,
        namecourse: name,
        image: file,
        lesson: "21 bài học",
        hours: "192 giờ",
        session: [],
      };
    } else {
      param = {
        namecourse: name,
        image: file,
        lesson: "21 bài học",
        hours: "192 giờ",
        session: [],
      };
    }

    // Gọi phương thức postCourse từ lớp CourseNew để tạo khóa học mới

    // Gọi phương thức pathCourse từ lớp courseNew để sửa khoá học

    if (idEdit) {
      CourseNew.patchCourse(param)
        .then(() => {
          setShowEdit(false);
          setId("");
          setFile("");
          setName("");
          setId("");
          dispatch(handleCallApiCourseNew()).unwrap();
        })
        .catch(() => {
          // Hiển thị thông báo lỗi cho người dùng
          toast.error("An error occurred. Please try again.");
        });
    } else {
      CourseNew.postCourse(param)
        .then(() => {
          setShowEdit(false);
          setId("");
          setFile("");
          setName("");
          dispatch(handleCallApiCourseNew()).unwrap();
        })
        .catch(() => {
          // Hiển thị thông báo lỗi cho người dùng
          toast.error("An error occurred. Please try again.");
        });
    }
    // Ẩn form và cập nhật danh sách khóa học

    // Gọi hàm để nó get về bên reducer và render ra
  };

  return (
    <div className="management-course">
      <SidebarAdmin />
      <div className="main-content">
        <div className="manager-course-header">
          <h2>Manager Course</h2>
          <button className="btn btn-add" onClick={toggleForm}>
            Add
          </button>
          <input
            type="text"
            placeholder="Tìm kiếm"
            id="input-manager-hearder"
            onKeyDown={handleSearch}
            onChange={handleOnchangeInput}
          />
        </div>
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
            {courses.map((course, index) => {
              return (
                <tr key={course.id}>
                  <td>{index + 1}</td>
                  <td>{course.namecourse}</td>
                  <td>
                    <img src={course.image} alt="" />
                  </td>
                  <td>
                    <button
                      className="btn btn-edit"
                      onClick={() => {
                        handleEdit(course);
                      }}
                    >
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
                            onChange={handleFileChange}
                          />
                          {file && <p>Selected file: {file.name}</p>}
                        </div>
                        {showEdit && (
                          <i className="bx bxs-message-x" onClick={toggleForm}></i>
                        )}
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    )}

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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerCourse;
