import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BusinessTemplateHero } from './BusinessTemplateHero'
import TemplateSidebar from './TemplateSidebar/TemplateSidebar'
import './template-general.css'
import Logo from '../../assets/motivv-logo.png'
import { TemplateContainer } from './TemplatesContainer/TemplateContainer'

const BusinessTemplateComponent = () => {
  return (
    <div className='mot-business-template'>
      <div className='w-100 d-flex flex-wrap justify-content-between align-items-baseline mot-business-template-navbar'>
        <div className='mb-2'>
          <Link to='/'>
            <img src={Logo} alt='' className='brand-logo' />
          </Link>
        </div>
        <div className='mot-template-suggest__btn'>
          <Link
            to='/business-template/suggest'
            className='mot-template-suggest_resouce'
          >
            <span role='img' aria-label='rocket'>
              🚀
            </span>{' '}
            Suggest Resources
          </Link>
        </div>
      </div>
      <BusinessTemplateHero />
      <Container className='mot-business-template-container'>
        <Row className='mot-business-template-main'>
          <Col md={2}>
            <TemplateSidebar />
          </Col>
          <Col md={9} className='ml-md-5'>
            <TemplateContainer />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BusinessTemplateComponent
