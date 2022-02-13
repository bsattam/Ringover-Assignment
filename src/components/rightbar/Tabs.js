import React from 'react'
import '../../styles/Rightbar.scss'

export default function Tabs() {
  return (
    <div className='tabs'>
        <div className='tabsContainer'>
            <div className='tab active'>Activity</div>
            <div className='tab'>Tasks</div>
            <div className='tab'>Progress</div>
        </div>
    </div>
  )
}
