import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { ReactComponent as BlueRect } from "../../assets/blue-rect.svg";
//import { ReactComponent as PracticalSvg } from '../../assets/pract.svg'
import Pratical from "../../assets/practical.svg";
import { ReactComponent as BuildStack } from "../../assets/build-stack.svg";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";
import Fade from "react-reveal/Fade";

import "./main.css";

export const DesignChallengeGrow = () => {
  return (
    <Container className="mot-designChallenge-section mot-dsc-grow overflow-hidden">
      <Row className="justify-content-center position-relative">
        <Col
          sm={9}
          md={12}
          lg={9}
          className="d-flex justify-content-center align-items-top"
        >
          <Col
            md={12}
            className="mot-dsc-insider__one d-flex flex-column py-4 px-3"
          >
            <div className="mot-dsc-grow__one">
              <Fade>
                <span>
                  <BlueRect />
                </span>
              </Fade>
              <Pulse>
                <h3 className="mot-access-section-header position-relative">
                  Grow your skills with <br /> confidence
                </h3>
              </Pulse>
            </div>
            <Col
              md={12}
              className="align-item-center d-flex pt-5 mot-dsc-grow_cards justify-content-between"
            >
              <Col className="m-0 p-0 d-flex" md={5}>
                <Slide left>

                {/* card to be adjusted */}
                  <div className="mot-dsc-grow_card position-relative d-flex flex-column">
                    <figure>
                      <img src={Pratical} alt="Gain pratical Knowledge" />
                    </figure>
                    <div className="mot-dsc-grow_card__text">
                      <h3 className="mot-dsc-grow_card__title">
                        Gain Practical Knowledge
                      </h3>
                      <p>
                        Gain practical knowledge in any design path. Learn
                        techniques and practice with modern briefs that would
                        speed up your skills.
                      </p>
                    </div>
                  </div>
                </Slide>
              </Col>
              <Col className="m-0 p-0 d-flex" md={5}>
                <Slide right>
                  <div className=" mot-dsc-grow_card position-relative d-flex flex-column">
                    <figure>
                      <BuildStack />
                    </figure>
                    <div className="mot-dsc-grow_card__text">
                      <h3 className="mot-dsc-grow_card__title">
                        Build Your Portfolio
                      </h3>
                      <p>
                        Improve your performance with collated feedback from
                        design a community and build your portfolio.{" "}
                      </p>
                    </div>
                  </div>
                </Slide>
              </Col>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
