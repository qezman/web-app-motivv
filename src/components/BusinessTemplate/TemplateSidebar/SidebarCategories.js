import React from 'react'
import { TemplateSidebarItem } from './TemplateSidebarItem'

import style from './template-sidebar.module.css'
import DesignIcon from '../../../assets/design-icon.svg'
import StrategyIcon from '../../../assets/strategy-icon.svg'
import ManagementIcon from '../../../assets/management-icon.svg'
import ClientsIcon from '../../../assets/clients-icon.svg'
import LegalIcon from '../../../assets/legal-icon.svg'
import OthersIcon from '../../../assets/others-icon.svg'

export const SidebarCategories = () => {
  return (
    <>
      <section className={style.motTemplateSidebarHeader}>
        <h3>
          All Categories <span>{`{200}`}</span>
        </h3>
      </section>
      <section className={style.motTemplateSidebarList}>
        <div className=''>
          <TemplateSidebarItem icon={DesignIcon} type='design' amount='200' />
          <TemplateSidebarItem
            icon={StrategyIcon}
            type='strategy'
            amount='200'
          />
          <TemplateSidebarItem
            icon={ManagementIcon}
            type='management'
            amount='200'
          />
          <TemplateSidebarItem icon={ClientsIcon} type='clients' amount='200' />
          <TemplateSidebarItem icon={LegalIcon} type='legal' amount='200' />
          <TemplateSidebarItem icon={OthersIcon} type='others' amount='200' />
        </div>
      </section>
    </>
  )
}
