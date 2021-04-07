import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To Embtec Konzultz',
  description: 'We specilizes in IT Training',
  keywords: 'IT TRAINING, IT DEVELOPMENT, AND CERTIFICATION',
}

export default Meta
