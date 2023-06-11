import React, { useState } from "react";
import "./lesson.css";
import { useSelector } from "react-redux";
import CardLeson from "../card/CardLeson";
const Lesson = () => {
  const data = useSelector((state) => state.courseNew);
  console.log(12,data);
  const [searchTerm, setSearchTerm] = useState(""); // Trạng thái để lưu giá trị từ ô tìm kiếm

  const filteredData = data.filter((lesson) =>
    lesson?.namecourse?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Cập nhật giá trị từ ô tìm kiếm
  };

  return (
    <div className="lesson">
        <h1>Khoá học</h1>
      <div className="lesson-filter">
        <div>
          <span>Rikkei Academy</span> sẵn có <span>{data.length}</span> cho bạn
        </div>
        <div className="lesson-filter-item">
          <input type="text" placeholder="Tìm kiếm khoá học" onChange={handleSearchChange} value={searchTerm}/>
          <i className="bx bx-search"></i>
        </div>
      </div>
      <div className="card-lesson">
      {filteredData.map((leson) => (
        <CardLeson key={leson.id} leson={leson} />
      ))}
      </div>
     
    </div>
  );
};

export default Lesson;
