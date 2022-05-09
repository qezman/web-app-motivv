import React from 'react'
import { ReactComponent as Comments } from '../../../assets/comments.svg'

import '../suggest-template-general.css'

export const SuggestTemplateIntro = () => {
  return (
    <div className='mot-suggest-template__intro'>
      <h1>
        <span style={{ marginRight: '11px'}}>
          <Comments />
        </span>
        Suggest a Resource
      </h1>
      <p>
        We’re always on the look out for new resources. If you know of any or
        have written a resource that is currently available, please do complete
        the form below. All submissions will be subject to approval by our team
        but we’d love to hear from you!
      </p>
    </div>
  )
}
