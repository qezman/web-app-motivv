import React from 'react'
import { Row, Col } from 'react-bootstrap'
import style from './BusinessTemplateCard.module.css'
import { TemplateLabel } from '../TemplateLabel'
import LikeIcon from '../../../assets/like-icon.svg'
import ContributorIcon from '../../../assets/contributor-icon.svg'
import CopyIcon from '../../../assets/copy-stack-icon.svg'

export const BusinessTemplateCard = ({
  type,
  caption,
  content,
  logo,
  typeColor = 'rgba(25, 188, 254, 0.11)',
  likes = '0',
  contributor,
  link,
  tags,
}) => {
  return (
    <div className={style.templateCard} datatype={type}>
      <section className={style.templateCardTop}>
        <figure
          className={style.cardImage}
          style={{ backgroundColor: typeColor }}
        >
          <img src={logo} alt={`resource of ${type}`} />
        </figure>
        <h2 className={style.templateCardCaption}>{caption}</h2>
      </section>
      <section className={style.templateCardContent}>
        <p>{content}</p>
      </section>
      <section className={style.templateCardTags}>
        {tags.map((tag, i) => {
          return (
            <span key={i} className={style.templateCardTag}>
              {`${'#'}${tag}`}
            </span>
          )
        })}
      </section>
      <Row className={style.templateCardMore}>
        <Col className='template-card-more' md={4}>
          <TemplateLabel
            styling='template-sm-font'
            svg={LikeIcon}
            content={likes}
          />{' '}
        </Col>
        <Col className='template-card-more pl-0' md={4}>
          <TemplateLabel
            styling='template-sm-font'
            svg={ContributorIcon}
            content={contributor}
          />{' '}
        </Col>
        <Col className='template-card-more px-0' md={4}>
          <TemplateLabel
            styling='template-sm-font flex-row-reverse'
            svg={CopyIcon}
            content={'Copy link'}
          />{' '}
        </Col>
      </Row>
    </div>
  )
}
