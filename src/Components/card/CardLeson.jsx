import React from "react";
import "./CardLeson.css";
import { Link } from "react-router-dom";

const CardLeson = (props) => {
  console.log(2222, props);

  return (
    <Link
      to={`/course-details/${props.leson.id}`}
      className="lesson-learn-course"
    >
      <div className="lesson-box">
        <div className="lesson-item-image">
          <img src={props.leson.image} alt="" />
        </div>
        <div className="lesson-item-icon">
          <h5>{props.leson.namecourse}</h5>
          <p>
            Chương trình Kỹ Sư CNTT Nhật Bản chất lượng cao giúp học viên làm
            chủ các kiến thức lập trình.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardLeson;
