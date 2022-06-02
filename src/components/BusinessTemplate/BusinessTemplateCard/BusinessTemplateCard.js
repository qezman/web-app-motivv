import React from "react";
import { Row } from "react-bootstrap";
import style from "./BusinessTemplateCard.module.css";
import ContributorIcon from "../../../assets/contributor-icon.svg";
import { Badge } from "react-bootstrap";
import Figma from "../../../assets/figma.svg";
import Notion from "../../../assets/notion.png";
import Airtable from "../../../assets/airtable.png";
import Office from "../../../assets/office.png";
import Sheets from "../../../assets/sheets.png";

export const BusinessTemplateCard = ({
  title,
  description,
  name,
  category,
  tool,
  url,
  likes,
}) => {
  const [red] = React.useState(Math.ceil(Math.random() * 300));
  const [green] = React.useState(Math.ceil(Math.random() * 300));
  const [blue] = React.useState(Math.ceil(Math.random() * 300));
  const [liked, setLiked] = React.useState(false);

  const getImageForType = () => {
    switch (tool.toLowerCase()) {
      case "figma":
        return Figma;
      case "notion":
        return Notion;
      case "airtable":
        return Airtable;
      case "sheets":
        return Sheets;
      case "office":
        return Office;
      default:
        return Figma;
    }
  };

  return (
    <div className={style.templateCard} datatype={tool}>
      <section className={style.templateCardTop}>
        <figure
          className={style.cardImage}
          style={{ backgroundColor: `rgb(${red}, ${green}, ${blue}, 0.1)` }}
        >
          <img src={getImageForType()} alt={`resource of ${tool}`} />
        </figure>
        <h2 className={style.templateCardCaption}>{title}</h2>
      </section>
      <section className={style.templateCardContent}>
        <p>{description}</p>
      </section>
      {/*<section className={style.templateCardTags}>
        { &&
          tags.map((tag, i) => {
            return (
              <span key={i} className={style.templateCardTag}>
                {`${"#"}${tag}`}
              </span>
            );
          })}
        </section>*/}
      {/*<section className={style.templateCardTags}>
        <span className={style.templateCardTag}>{category.toUpperCase()}</span>*
      </section>*/}
      <Row className={style.templateCardMore}>
        <Badge
          pill
          className="d-flex mot-template-label template-sm-font"
          onClick={() => setLiked(!liked)}
        >
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill={!liked ? "none" : "#455880"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.66671 1.56934C2.82604 1.56934 1.33337 3.04423 1.33337 4.8639C1.33337 6.33281 1.91671 9.81905 7.65871 13.3432C7.76156 13.4057 7.87964 13.4388 8.00004 13.4388C8.12044 13.4388 8.23852 13.4057 8.34137 13.3432C14.0834 9.81905 14.6667 6.33281 14.6667 4.8639C14.6667 3.04423 13.174 1.56934 11.3334 1.56934C9.49271 1.56934 8.00004 3.56604 8.00004 3.56604C8.00004 3.56604 6.50737 1.56934 4.66671 1.56934Z"
              stroke={!liked ? "#134A7C" : "#455880"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>{likes}</span>
        </Badge>

        <Badge
          pill
          className="d-flex mot-template-label template-sm-font"
          onClick={() => setLiked(!liked)}
        >
          <img src={ContributorIcon} alt="contributor icon" />
          <span>{name}</span>
        </Badge>

        <Badge
          pill
          className="d-flex mot-template-label template-sm-font flex-row-reverse"
          onClick={async () => {
            await navigator.clipboard.writeText(url);
            await alert("Copied the text: " + url);
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33331 5.33333H2.66665C1.93131 5.33333 1.33331 5.93133 1.33331 6.66667V13.3333C1.33331 14.0687 1.93131 14.6667 2.66665 14.6667H9.33331C10.0686 14.6667 10.6666 14.0687 10.6666 13.3333V6.66667C10.6666 5.93133 10.0686 5.33333 9.33331 5.33333Z"
              fill="#455880"
            />
            <path
              d="M13.3333 1.33333H6.66665C6.31302 1.33333 5.97389 1.47381 5.72384 1.72386C5.47379 1.97391 5.33331 2.31304 5.33331 2.66667V4H10.6666C11.0203 4 11.3594 4.14048 11.6095 4.39052C11.8595 4.64057 12 4.97971 12 5.33333V10.6667H13.3333C13.6869 10.6667 14.0261 10.5262 14.2761 10.2761C14.5262 10.0261 14.6666 9.68696 14.6666 9.33333V2.66667C14.6666 2.31304 14.5262 1.97391 14.2761 1.72386C14.0261 1.47381 13.6869 1.33333 13.3333 1.33333Z"
              fill="#455880"
            />
          </svg>
          <span>Copy Link</span>
        </Badge>
      </Row>
    </div>
  );
};
