import React from "react";
import Header from "../../Components/common/Header/header";
import Footer from "../../Components/common/Footter/Footer";
import RouteLearn from "../../Components/Route/RouteLearn";

const RouteCourse = () => {
  return (
    <section className="lsm-layout">
      <Header />
      <main className="lms-layout-content">
        <RouteLearn/>
      </main>
      <Footer />
    </section>
  );
};

export default RouteCourse;
