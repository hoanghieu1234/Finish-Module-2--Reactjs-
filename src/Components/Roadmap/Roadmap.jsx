import React from "react";
import "./Roadmap.css";

import { TbBrandNextjs } from "react-icons/tb";

const Roadmap = () => {
  return (
    <div className="roadmaps-home-page">
      <div className="roadmaps-title">
        <h4>Công Nghệ Thịnh Hành</h4>
      </div>
      <div className="roadmaps-home-pages-row">
        <div className="card-pages-home">
          <div className="card-pages-home-row">
            <div className="icons">
              <i className="bx bxl-javascript"></i>
            </div>
            <div>Javascipts</div>
          </div>
        </div>
        <div className="card-pages-home">
          <div className="card-pages-home-row">
            <div className="icons">
              <i className="bx bxl-react"></i>
            </div>
            <div>ReactJS</div>
          </div>
        </div>
        <div className="card-pages-home">
          <div className="card-pages-home-row">
            <div className="icons">
              <i className="bx bxl-nodejs"></i>
            </div>
            <div>NodeJS</div>
          </div>
        </div>
        <div className="card-pages-home">
          <div className="card-pages-home-row">
            <div className="icons">
              <TbBrandNextjs />
            </div>
            <div>NextJS</div>
          </div>
        </div>
        <div className="card-pages-home">
          <div className="card-pages-home-row">
            <div className="icons">
              <i className="bx bxl-react"></i>
            </div>
            <div>ReactJS</div>
          </div>
        </div>
        <div className="card-pages-home">
          <div className="card-pages-home-row">
            <div className="icons">
              <i className="bx bxl-react"></i>
            </div>
            <div>ReactJS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
