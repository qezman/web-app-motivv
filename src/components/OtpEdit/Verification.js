import { useState } from "react";
import "./Verification.css";

const buttonInlineStyle = {
  background: "none",
  color: "black",
  border: "1px solid black",
};

const Verification = () => {
  const [verificationCode, setVerificationCode] = useState(["", "", ""]);
  const [resendloading, setResendLoading] = useState(false);
  const [submitloading, setSubmitLoading] = useState(false);

  const handleInputChange = (index, value) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value; 
    setVerificationCode(updatedCode);
  };

  const handleResend = () => {
    setResendLoading(true);
    setTimeout(() => {
      setResendLoading(false);
      console.log("resent");
    }, 2000);
  };

  const handleSubmit = () => {
    setSubmitLoading(true);
    setTimeout(() => {
      setSubmitLoading(false);
      console.log("submitted");
    }, 2000);
  };
  return (
    <div className="Otp-background">
      <div className="Otp-card">
        <div className="svg-body">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130"
            height="130"
            viewBox="0 0 130 130"
            fill="none"
          >
            <path
              d="M105.625 41.6406H88.3594V28.4375C88.3594 22.2422 85.8983 16.3007 81.5176 11.9199C77.1368 7.53919 71.1953 5.07813 65 5.07812C58.8047 5.07813 52.8632 7.53919 48.4824 11.9199C44.1017 16.3007 41.6406 22.2422 41.6406 28.4375V41.6406H24.375C22.4895 41.6406 20.6812 42.3896 19.3479 43.7229C18.0146 45.0562 17.2656 46.8645 17.2656 48.75V105.625C17.2656 107.511 18.0146 109.319 19.3479 110.652C20.6812 111.985 22.4895 112.734 24.375 112.734H105.625C107.511 112.734 109.319 111.985 110.652 110.652C111.985 109.319 112.734 107.511 112.734 105.625V48.75C112.734 46.8645 111.985 45.0562 110.652 43.7229C109.319 42.3896 107.511 41.6406 105.625 41.6406ZM47.7344 28.4375C47.7344 23.8584 49.5534 19.4668 52.7914 16.2289C56.0293 12.9909 60.4209 11.1719 65 11.1719C69.5791 11.1719 73.9707 12.9909 77.2086 16.2289C80.4466 19.4668 82.2656 23.8584 82.2656 28.4375V41.6406H47.7344V28.4375ZM106.641 105.625C106.641 105.894 106.534 106.153 106.343 106.343C106.153 106.534 105.894 106.641 105.625 106.641H24.375C24.1056 106.641 23.8473 106.534 23.6568 106.343C23.4664 106.153 23.3594 105.894 23.3594 105.625V48.75C23.3594 48.4806 23.4664 48.2223 23.6568 48.0318C23.8473 47.8414 24.1056 47.7344 24.375 47.7344H105.625C105.894 47.7344 106.153 47.8414 106.343 48.0318C106.534 48.2223 106.641 48.4806 106.641 48.75V105.625ZM70.0781 77.1875C70.0781 78.1919 69.7803 79.1737 69.2223 80.0088C68.6643 80.8439 67.8712 81.4947 66.9433 81.8791C66.0154 82.2634 64.9944 82.364 64.0093 82.168C63.0242 81.9721 62.1194 81.4885 61.4092 80.7783C60.699 80.0681 60.2154 79.1632 60.0194 78.1782C59.8235 77.1931 59.9241 76.1721 60.3084 75.2442C60.6928 74.3163 61.3437 73.5232 62.1787 72.9652C63.0138 72.4072 63.9956 72.1094 65 72.1094C66.3468 72.1094 67.6384 72.6444 68.5908 73.5967C69.5431 74.5491 70.0781 75.8407 70.0781 77.1875Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="container-one">
          <p className="verification">Verification Code</p>
          <p className="enter-verification">
            Please enter the verification code sent to your mobile phone
          </p>
          {/* <p className="phone">+234 81 2214 2257</p> */}
          <div className="numbers">
            {/* <span className="figure">5</span>
            <span className="figure">7</span>
            <span className="figure">5</span>
            <span className="figure">0</span> */}

            {verificationCode.map((digit, index) => {
              <input
                key={index}
                type="text"
                maxLength={"1"}
                value={digit}
                onChange={(e) => handleInputChange(e.target.value)}
              />;
            })}
          </div>
        </div>

        <div className="otp-btns-container">
          <div className="otp-btn-container">
            <button
              className="blue-btn"
              style={buttonInlineStyle}
              onClick={handleResend}
              disabled={resendloading}
            >
              {resendloading ? "Resending..." : "Resend"}
            </button>
          </div>

          <div className="otp-btn-container">
            <button
              onClick={handleSubmit}
              disabled={submitloading}
              className="blue-btn"
              style={{ marginTop: "20px", color: "white" }}
            >
              {submitloading ? "Submitting" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Verification;
