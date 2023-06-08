import React from "react";
import Header from "../../Components/common/Header/header";
import Footer from "../../Components/common/Footter/Footer";
import Lesson from "../../Components/Lesson/lesson";

const CourseOnline = () => {
  return (
    <section>
      <Header />
      <main>
        <Lesson />
      </main>
      <Footer />
    </section>
  );
};

export default CourseOnline;
