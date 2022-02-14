import React from 'react'
import '../../styles/Rightbar.scss'

export default function Tabs({tab, setTab}) {
  return (
    <div className='tabs'>
        <div className='tabsContainer'>
            <div className={`tab active ${tab==="activities" ? "active" : "inactive"}`}
            onClick={() => setTab('activities')}>Activity</div>
            <div className={`tab active ${tab==="tasks" ? "active" : "inactive"}`}
            onClick={() => setTab('tasks')}>Tasks</div>
            <div className={`tab active ${tab==="progress" ? "active" : "inactive"}`}
            onClick={() => setTab('progress')}>Progress</div>
        </div>
    </div>
  )
}
