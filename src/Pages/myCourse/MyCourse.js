import React from 'react'
import Header from '../../Components/common/Header/header'
import Footer from '../../Components/common/Footter/Footer'
import MyCourse from '../../Components/MyCourse/MyCourse'

const MyOfCourse = () => {
  return (
    <section className="lsm-layout">
      <Header />
      <main className="lms-layout-content">
        < MyCourse/>
      </main>
      <Footer/>
    </section>
  )
}

export default MyOfCourse