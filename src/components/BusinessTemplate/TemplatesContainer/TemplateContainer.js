import React from 'react'
import { Container } from 'react-bootstrap'
import { BusinessTemplateCard } from '../BusinessTemplateCard/BusinessTemplateCard'
import templates from './data'

export const TemplateContainer = () => {
  return (
    <Container className='mot-templates-grid'>
      {templates.map((template, i) => {
        return <BusinessTemplateCard key={i} {...template} />
      })}
    </Container>
  )
}
