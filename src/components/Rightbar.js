import React, { useState } from 'react'
import Topbuttons from './rightbar/Topbuttons';
import Tabs from './rightbar/Tabs';
import Activities from './rightbar/Activities'
import Tasks from './rightbar/Tasks'
import Progress from './rightbar/Progress'
import '../styles/Rightbar.scss'

export default function Rightbar({tab, setTab}) {

  return (
    <div className='rightbar1'>
        <Topbuttons/>
        <Tabs tab={tab} setTab={setTab}/>
        
        {tab === 'activities' && <Activities/>}
        {tab === 'tasks' && <Tasks/>}
        {tab === 'progress' && <Progress/>}
    </div>
  )
}
