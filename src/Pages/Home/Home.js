import React, { useEffect } from "react";
import Header from "../../Components/common/Header/header";
import "./Home.css";
import Content from "../../Components/Content/Content";
import Roadmap from "../../Components/Roadmap/Roadmap";
import CourseHome from "../../Components/CourseHome/CourseHome";
import Footer from "../../Components/common/Footter/Footer";
import LearningPath from "../../Components/LearningPath/LearningPath";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isAdmin = JSON.parse(localStorage.getItem('users'))
  const navigate = useNavigate()
  useEffect(()=>{
    if(Number(isAdmin?.role) === 1) {
      navigate('/admin')
    }
  },[])
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
