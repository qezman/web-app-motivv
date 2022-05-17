import React from "react";
import Header from "./components/Header";
import KickStart from "./components/KickStart";
import SkillsCards from "./components/SkillsCards";
import Footer from "../components/Footer/index";

export default function index() {
  return (
    <>
      <Header />
      <KickStart />
      <SkillsCards />
      {/* <Footer /> */}
    </>
  );
}
