import React, { useState } from "react";
import "../styles/studyPlansCard.css";
import Results from "./Results";

const StudyPlansCard = () => {
  const [value, setValue] = useState("option1");
  const [showResults, setShowResults] = useState(false);

  const handleChange = changeEvent => {
    setValue(changeEvent.target.value);
  };

  const onClick = () => setShowResults(true);

  return (
    <div className="study__plans__section__plans">
      <div className="study__plans__section__card__container">
        <div
          className="card study__plans__section__card"
          style={{
            border: value === "option1" ? "solid 3px #134A7C" : "solid 1px #134A7C",
            // borderRadius: value === "option1" ? "8px" : "8px",
          }}
        >
          <div className="study__plans__section__card__input">
            <input
              type="radio"
              onChange={handleChange}
              label="option1"
              checked={value === "option1"}
              value="option1"
              onClick={onClick}
            />
          </div>
          <div className="study__plans__section__sub">
            <h2>
              ₦ <span>20,000</span>.00
            </h2>
            <p>Full Curriculum</p>
          </div>

          <div className=" study__plans__section__card__sub__section">
            <div className=" study__plans__section__card__first__sub">
              <h4>Features:</h4>
              <p>Access to course curriculum</p>
              <p>Access to course topics</p>
              <p>Access to reference links</p>
            </div>

            <div className=" study__plans__section__card__second__sub">
              <p>Get certificate of completion and project advisor</p>
            </div>
          </div>
        </div>

        <div
          className="card study__plans__section__card third__study__plans__card"
          style={{
            border: value === "option3" ? "solid 3px #134A7C" : "solid 1px #134A7C",
            // borderRadius: value === "option3" ? "8px" : "8px",
          }}
        >
          <div className="study__plans__section__card__input">
            <input
              type="radio"
              onChange={handleChange}
              checked={value === "option3"}
              value="option3"
              onClick={onClick}
            />
          </div>
          <div className="study__plans__section__sub">
            <h2>
              ₦ <span>100,000</span>.00
            </h2>
            <p>Full Curriculum</p>
          </div>

          <div className=" study__plans__section__card__sub__section">
            <div className=" study__plans__section__card__first__sub">
              <h4>Features:</h4>
              <p>
                Access to course curriculum, courses links + resource links
                (blogs and course) + videos
              </p>
              <p>Access to course topics</p>
              <p>Access to reference links</p>
            </div>

            <div className=" study__plans__section__card__second__sub">
              <p>Get certificate of completion and project advisor</p>
            </div>
          </div>
        </div>
      </div>

      {showResults ? <Results /> : ""}
    </div>
  );
};

export default StudyPlansCard;
