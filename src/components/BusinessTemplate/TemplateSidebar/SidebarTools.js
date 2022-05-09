import React from 'react'
import Figma from '../../../assets/figma.svg'
import Notion from '../../../assets/notion.png'
import Airtable from '../../../assets/airtable.png'
import Office from '../../../assets/office.png'
import Sheets from '../../../assets/sheets.png'

import { ToolTypeItem } from './ToolTypeItem'

import style from './template-sidebar.module.css'

export const SidebarTools = () => {
  return (
    <>
      <section className={style.motTemplateSidebarHeaderTwo}>
        <h3>Tools</h3>
      </section>
      <section className={style.motTemplateSidebarList}>
        <div className=''>
          <ToolTypeItem icon={Figma} type='Figma' />
          <ToolTypeItem icon={Notion} type='Notion' />
          <ToolTypeItem icon={Airtable} type='Airtable' />
          <ToolTypeItem icon={Office} type='Google Docs' />
          <ToolTypeItem icon={Sheets} type='Microsoft Excel' />
        </div>
      </section>
    </>
  )
}
