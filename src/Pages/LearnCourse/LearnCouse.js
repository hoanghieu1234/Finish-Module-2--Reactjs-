import React from "react";
import Header from "../../Components/common/Header/header";
import Learning from "../../Components/learning/learning";

const LearnCouse = () => {
  return (
    <section className="lsm-layout">
      <Header />
      <main className="lms-layout-content">
        <Learning />
      </main>
    </section>
  );
};

export default LearnCouse;
