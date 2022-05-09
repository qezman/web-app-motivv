import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import './suggest-template-general.css'
import Logo from '../../assets/motivv-logo.png'

import { SuggestTemplateIntro } from './SuggestTemplateIntro/SuggestTemplateIntro'
import SuggestTemplateForm from './SuggestTemplateForm/SuggestTemplateForm'

const SugggestTemplateComponent = () => {
  const history = useHistory()
  return (
    <div className='mot-business-template'>
      <div className='w-100 d-flex flex-wrap justify-content-between align-items-baseline mot-business-template-navbar'>
        <div className='mb-2'>
          <Link to='/'>
            <img src={Logo} alt='' className='brand-logo' />
          </Link>
        </div>
      </div>
      <p className='mot-go-back-click' onClick={() => history.goBack()}>
        <span className="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#134A7C" className="bi bi-chevron-left" viewBox="0 0 16 16" style={{ verticalAlign: 'sub'}}>
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </span>
        back
      </p>
      <Container className='mot-suggest-template'>
        <Row>
          <SuggestTemplateIntro />
          <SuggestTemplateForm />
        </Row>
      </Container>
    </div>
  )
}

export default SugggestTemplateComponent
