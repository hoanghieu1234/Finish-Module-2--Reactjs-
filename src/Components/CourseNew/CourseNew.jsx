import React, { useEffect, useState } from "react";
import "./CourseNew.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToMyCourse } from "../../redux/reducer/myCourse";
import { ToastContainer, toast } from "react-toastify";

const CourseNew = () => {
  const [data, setData] = useState({});
  const getCourse = useSelector((state) => state.courseNew);
  const userLocal = JSON.parse(localStorage.getItem("users"));
  const [myCourse, setMyCourse] = useState(
    JSON.parse(localStorage.getItem("my-course")) || []
  );
  const idParams = useParams();
  const dispatch = useDispatch();

  const userGetPost = myCourse?.filter((item) => {
    return item.userId === Number(userLocal?.id);
  });

  console.log(userGetPost);

  useEffect(() => {
    const dataMain = getCourse?.find((item) => item.id === Number(idParams.id));
    setData(dataMain);
  }, [idParams.id]);

  // check trùng khoá học thì không cho qua khoá học của tôi
  const handleGetPost = () => {
    if (!userLocal) {
      toast.error("Vui lòng đăng nhập để thêm khoá học !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const hasCourses = userGetPost[0]?.myCourse?.find((item) => {
        return item.idCourses === data?.id;
      });
      console.log(hasCourses);
      if (hasCourses) {
        toast.error("Khoá học này đã được thêm !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        const dataPost = {
          idCourses: data?.id,
          ...data,
          userId: userLocal?.id,
        };
        delete dataPost.id;
        dispatch(addToMyCourse(dataPost));
        toast.success("Bạn đã thêm thành công !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setMyCourse(JSON.parse(localStorage.getItem("my-course")) || []);
      }
    }
  };

  return (
    <div id="course-details">
      <ToastContainer />
      <div className="course-details-banner">
        <div className="block-banner">
          <nav className="nav-banner">
            <ul>
              <li>
                <a href="" target="_blank">
                  Home
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  Danh sách khoá học
                </a>
              </li>
              <li>
                {" "}
                <a href="" target="_blank">
                  [v2.0] Web Front-end Fudamental
                </a>
              </li>
            </ul>
          </nav>
          <div className="title-banner">{data?.namecourse} </div>
          <strong>{data?.namecourse}</strong>
          <div className="inform-course">
            <div className="infor">
              <span>Cơ bản</span>
            </div>
            <div className="infor">
              <i className="bx bx-user"></i>
              <span>1141 học viên đăng ký</span>
            </div>
          </div>
        </div>
      </div>
      {/* // Course container */}
      <div className="courseNew-container">
        <div className="courNew-container-all">
          <div className="container-left">
            <div className="course-details-infor">
              <span>
                <a href="">Mô tả</a>
              </span>
              <span>
                <a href="">Bạn sẻ học</a>
              </span>
              <span>
                <a href="">Yêu cầu</a>
              </span>
              <span>
                <a href="">Nội dung</a>
              </span>
              <span>
                <a href="">Giảng viên</a>
              </span>
            </div>
            <div className="course-decription">
              <h3>Mô tả</h3>
              <p>
                Training Program Preparation giúp học viên làm quen với các khái
                niệm trong lập trình web, từng bước xây dựng cho mình một Websit
                cơ bản với HTML, CSS và Javascript. Có khả năng chuyển đổi từ
                thiết kế (Figma, Photoshop) sang website hoàn chỉnh. Học viên
                làm chủ các kiến thức lập trình cơ bản và tư duy giải quyết vấn
                đề, có đủ kiến thức và kỹ năng nền tảng về lập trình để bước
                sang giai đoạn học lập trình chuyên sâu. <br />
                Kết thúc module này giúp học viên thành thạo được các kỹ thuật
                lập trình cơ bản với ngôn ngữ JavaScript, xây dựng được các ứng
                dụng cần tính toán sử dụng các kiến thức lập trình cơ bản, tạo
                nền tảng vững chắc khi chuyển sang học các kỹ thuật lập trình
                nâng cao hơn với các loại ngôn ngữ lập trình khác nhau như Java,
                C#, PHP, NodeJS v.v..
              </p>
            </div>
            <div className="courseNew-Learn">
              <div className="course-you-learn">Bạn sẽ học</div>
              <div className="courseNew-Learn-left">
                <div className="courseNew-cols-1">
                  <div className="courseNew-item">
                    <i className="bx bx-time"></i>
                    <span>HTML5</span>
                  </div>
                  <div className="courseNew-item">
                    <i className="bx bx-time"></i>
                    <span>Git,GitHup</span>
                  </div>
                  <div className="courseNew-item">
                    <i className="bx bx-time"></i>
                    <span>Grid Layout</span>
                  </div>
                </div>

                <div className="courseNew-cols-2">
                  <div className="courseNew-item">
                    <i className="bx bx-time"></i>
                    <span>css3</span>
                  </div>
                  <div className="courseNew-item">
                    <i className="bx bx-time"></i>
                    <span>Git-flow</span>
                  </div>
                  <div className="courseNew-item">
                    <i className="bx bx-time"></i>
                    <span>Flex Layout</span>
                  </div>
                </div>
              </div>
              <div className="courseNew-Learn-right"></div>
            </div>
            <div className="courseNew-content">
              <div className="courseNew-title">
                <div>
                  [V2.0][Chuẩn bị] Session 01 - Varibles, Data types,
                  Operator,Io
                </div>
                <div>{data?.lesson}</div>
              </div>
              <div className="courseNew-lesson">
                {data &&
                  data?.session?.map((item, index) => {
                    return (
                      <div key={index}>
                        <i className="bx bx-book-open"></i>
                        <a>{item.course}</a>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="container-right">
            <div className="container-right-img">
              <img src={data?.image} alt="" />
            </div>
            <div className="container-right-btn">
              <button onClick={handleGetPost}>Thêm vào khoá học</button>
              <div className="container-right-infomation">
                <div className="right-infomation-1">
                  <div>
                    <i className="bx bx-book-open"></i>
                    <p>Chương</p>
                  </div>
                  <div>19</div>
                </div>
                <div className="right-infomation-2">
                  <div>
                    <i className="bx bxs-book-content"></i>
                    <p>Bài kiểm tra</p>
                  </div>
                  <div>0</div>
                </div>
                <div className="right-infomation-2">
                  <div>
                    <i className="bx bx-time-five"></i>
                    <p>{data?.hours}</p>
                  </div>
                  <div>0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content-less */}
      <div className="content-lesson"></div>
    </div>
  );
};

export default CourseNew;
