import React from "react";
import Header from "../../Components/common/Header/header";
import Footer from "../../Components/common/Footter/Footer";
import CourseNew from "../../Components/CourseNew/CourseNew";

const CourseDetails = () => {
  return (
    <section>
      <Header />
      <main>
        <CourseNew/>
      </main>
      <Footer/>
    </section>
  );
};

export default CourseDetails;
