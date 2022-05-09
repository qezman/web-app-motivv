import React from 'react'
import style from './template-sidebar.module.css'

export const ToolTypeItem = ({ icon, type }) => {
  return (
    <div className={style.motTemplateToolItem}>
      <span className={style.motTemplateToolItemInfo}>
        <img src={icon} alt={type} className='img-fluid' />
        <h4 className='ml-2'>{type}</h4>
      </span>
      <div className={style.motTemplateToolCheckbox}>
        <input
          id='mot-template-checkbox'
          type='checkbox'
          className={style.motTemplateToolInputCheckbox}
        />
        <span className={style.motTemplateCheck}></span>
        <label for='mot-template-checkbox'></label>
      </div>
    </div>
  )
}
