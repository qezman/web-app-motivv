import React from "react";
import Header from "./components/Header";
import KickStart from "./components/KickStart";
import SkillsCards from "./components/SkillsCards";
import Footer from "../components/Footer/index";
import Testimonial from "./components/Testimonial";
import Curriculum from "./components/Curriculum";


export default function index() {
  return (
    <>
      {/* <Header />
      <KickStart /> */}
      <Curriculum/>
      <Testimonial/>
      {/* <SkillsCards /> */}
     
      {/* <Footer /> */}
    </>
  );
}
