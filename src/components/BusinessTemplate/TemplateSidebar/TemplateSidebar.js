import React from 'react'
import style from './template-sidebar.module.css'
import RefreshIcon from '../../../assets/refresh-icon.svg'

import { SidebarCategories } from './SidebarCategories'
import { SidebarTools } from './SidebarTools'

const TemplateSidebar = () => {
  return (
    <div className={style.motTemplateSidebar}>
      <SidebarCategories />
      <span className='d-flex justify-content-center align-items-start w-100 mt-4 mot-template-list-refresh'>
        <img
          src={RefreshIcon}
          alt='refresh the list of categories'
          className='mr-2'
        />
        <p>View More</p>
      </span>
      <SidebarTools />
    </div>
  )
}

export default TemplateSidebar
