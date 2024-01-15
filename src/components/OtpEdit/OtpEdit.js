import { useState } from "react";
import "./OtpEdit.css";

const OtpEdit = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleRequestOTP = (e) => {
    e.preventDefault();
    console.log(`Requesting OTP for Name: ${name}, Phone: ${phone}`);
  };

  const handleGoogleLogin = () => {
    console.log("Logging in with Google");
  };

  const handleFacebookLogin = () => {
    console.log("Logging in with Facebook");
  };
  return (
    <form className="Otp-background">
      <div className="Otp-card">
        <h1 className="Login-acct">Login to your account</h1>
        <p className="hello-text">Hello,</p>
        <div>
          <input
            type="text"
            className="name-input"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            className="name-input"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        <div className="otp-btn-container">
          <button onClick={handleRequestOTP} className="blue-btn">
            Request OTP
          </button>
        </div>

        <div>
          <p className="or-text">Or login with</p>
        </div>

        <div className="otp-btn-container">
          <button onClick={handleGoogleLogin} className="google-btn">
            Google
          </button>
        </div>

        <div className="otp-btn-container">
          <button onClick={handleFacebookLogin} className="google-btn">
            Facebook
          </button>
        </div>

        <div>
          <p className="an-acct">
            Did not receive an OTP?
            <span style={{ color: "#1c468e" }}>Resend</span>
          </p>
        </div>
      </div>
    </form>
  );
};
export default OtpEdit;
