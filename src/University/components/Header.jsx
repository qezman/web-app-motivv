import React from "react";
import Fade from "react-reveal";
import "../styles/style.css";
import Slider from "react-slick";
import { Card, Col, Row, Button } from "react-bootstrap";
import DownIcon from "../assets/arrow_downward.svg";
import Img1 from "../assets/Rectangle 406-1.jpg";
import Img2 from "../assets/Rectangle 406-2.jpg";
import Img3 from "../assets/Rectangle 406.jpg";
import Img4 from "../assets/Rectangle 407-2.jpg";
import Img5 from "../assets/Rectangle 407-1.jpg";

const Header = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Fade bottom>
      <Row>
        <Col className="styled-header">
          <h6 className="text-white">DESIGN SCHOOL</h6>
          <h1>
            Fast track your
            <span style={{ color: "#F89707" }}> Self-taught Design </span>{" "}
            Career With Our Complete 4-year University-feel Curriculum!
          </h1>
          <Button className="style-button">
            Scroll to learn more <img src={DownIcon} alt="" />
          </Button>
        </Col>
      </Row>
    </Fade>
  );
};

export default Header;
