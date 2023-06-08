import React from "react";
import Header from "../../Components/common/Header/header";
import "./Home.css";
import Content from "../../Components/Content/Content";
import Roadmap from "../../Components/Roadmap/Roadmap";
import CourseHome from "../../Components/CourseHome/CourseHome";
import Footer from "../../Components/common/Footter/Footer";
import LearningPath from "../../Components/LearningPath/LearningPath";

const Home = () => {
  return (
    <section className="lsm-layout">
      <Header />
      <main className="lms-layout-content">
        <Content/>
        <Roadmap/>
        <CourseHome/>
        <LearningPath/>
      </main>
      <Footer/>
    </section>
  );
};

export default Home;
