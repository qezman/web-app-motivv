import React, {useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Footer from '../../components/Footer';
import {Link} from "react-router-dom"
import "./Verification.css";

let Logo = "https://res.cloudinary.com/denw9euui/image/upload/v1594310687/Motivv/logo_wwolum.png";
let arrow = "https://res.cloudinary.com/denw9euui/image/upload/v1594397277/arrow_w_l9x24r.png";


const OTPVerification = () => {
    const [otp, setOtp] = useState("");

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted OTP", otp);
    };

    return (
        <div className="otp-container">
            <h2 className="verify-email">Verify your email</h2>
            <form className="otp-form-container" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="OTP Code"
                    className="otp-code"
                    value={otp}
                    onChange={handleOtpChange}
                />
                <div className="underline"></div>
                <p className="otp-text">An OTP was sent to your email, kindly paste</p>
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default function Apply() {
    return (
        <div>
            <div className="mot-landing-page-blue">
                <div className="mot-landing-page">
                    <Container className="m-auto">
                        <Row className="justify-content-center">
                            <Col md={10}>
                                <Row className="justify-content-between align-items-center px-3 mot-apply-top">
                                <span>
                                    <Link to="/">
                                        <img src={Logo} alt="" className="logo"/>
                                    </Link>
                                </span>
                                    <span>
                                    <Link to="/edit">
                                        <span className="edit-profile">
                                            Edit Profile
                                        </span>
                                    </Link>
                                </span>
                                </Row>
                                <Row className="pt-5">
                                    <Col md={8} className="mot-text-color">
                                        <div className="mot-catch-phrase">
                                            Create a striking <br/>
                                            profile and get vetted <br/>
                                            for your design cause.
                                        </div>
                                    </Col>
                                    <Col md={4} className="mot-apply-instruction">
                                        <h6 className="white-text small-texts">
                                            How it works:
                                        </h6>
                                        <div className="white-text pt-2 d-flex">
                                            <div>
                                                <img src={arrow} alt=""/>
                                            </div>
                                            <div className="pl-3">
                                                Input your name and Job Headline
                                            </div>
                                        </div>
                                        <div className="white-text pt-2 d-flex">
                                            <div>
                                                <img src={arrow} alt=""/>
                                            </div>
                                            <div className="pl-3">
                                                Upload your avatar
                                            </div>
                                        </div>
                                        <div className="white-text pt-2 d-flex">
                                            <div>
                                                <img src={arrow} alt=""/>
                                            </div>
                                            <div className="pl-3">
                                                Include your portfolio link
                                            </div>
                                        </div>
                                        <div className="white-text pt-2 d-flex">
                                            <div>
                                                <img src={arrow} alt=""/>
                                            </div>
                                            <div className="pl-3">
                                                Add your preferred software
                                            </div>
                                        </div>
                                        <div className="white-text pt-2 d-flex">
                                            <div>
                                                <img src={arrow} alt=""/>
                                            </div>
                                            <div className="pl-3">
                                                Gain approval
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div>
                    <OTPVerification/>
                </div>


            </div>
            {/*<Footer/>*/}
        </div>
    )
}
