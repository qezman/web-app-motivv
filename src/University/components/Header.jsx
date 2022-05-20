import React from "react";
import Fade from "react-reveal";
import "../styles/style.css";
import Slider from "react-slick";
import { Card, Col, Row, Button } from "react-bootstrap";
import DownIcon from "../assets/arrow_downward.svg";
import NavBar from "./NavBar";
import Img1 from "../assets/Rectangle 406-1.jpg";
import Img2 from "../assets/Rectangle 406-2.jpg";
import Img3 from "../assets/Rectangle 406.jpg";
import Img4 from "../assets/Rectangle 407-2.jpg";
import Img5 from "../assets/Rectangle 407-1.jpg";

const settings = {
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Header = () => {
  return (
    <Fade bottom>
      <NavBar />
      <div className="styled-header">
        <div className="font-weight-bold">
          <h6 className="text-white">DESIGN SCHOOL</h6>
          <h1>
            Fast track your
            <span style={{ color: "#F89707" }}> Self-taught Design </span>{" "}
            Career With Our Complete 4-year University-feel Curriculum!
          </h1>
          <Button className="style-button">
            Scroll to learn more <img src={DownIcon} alt="" />
          </Button>
        </div>
      </div>

      {/* <div style={{ display:"inline-block"}}> */}
      <Slider {...settings}>
        <div className="">
          <div className="">
            <img style={{ height: "100%", width: "100%" }} src={Img1} alt="" />
          </div>
        </div>

        <div className="">
          <div className="">
            <img style={{ height: "100%", width: "100%" }} src={Img2} alt="" />
          </div>
        </div>

        <div className="">
          <div className="">
            <img style={{ height: "100%", width: "100%" }} src={Img3} alt="" />
          </div>
        </div>

        <div className="">
          <div className="">
            <img style={{ height: "100%", width: "100%" }} src={Img5} alt="" />
          </div>
        </div>
      </Slider>
      {/* </div> */}
    </Fade>
  );
};

export default Header;
