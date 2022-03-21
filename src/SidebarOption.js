import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({active,Muiicon,text}) => {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Muiicon className='Icon'/>
        <h2>{text}</h2> 
    </div>
  )
}

export default SidebarOption