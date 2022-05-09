import React from 'react'
import { Banner } from '../components/Banner/Banner'
import BusinessTemplateComponent from '../components/BusinessTemplate'
import Helmet from '../components/Helmet'
import Footer from '../components/Footer'


const BusinessTemplate = () => {
  return (
    <>
      <Helmet
        page='Business Templates | Motivv'
        title='Access to readily created template contents for your needs'
        description=''
      />
      <Banner
        content={
          <p>
            {' '}
            🎉 🎉 🎉 Level up your design skills by working on real design
            challenge.
            <a href='/challenges'>Discover Now</a>
          </p>
        }
        styling='banner-challenge-advertise'
      />
      <BusinessTemplateComponent />
      <Footer />
    </>
  )
}

export default BusinessTemplate
