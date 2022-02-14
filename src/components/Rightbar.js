import React from 'react'
import Topbuttons from './rightbar/Topbuttons';
import Tabs from './rightbar/Tabs';
import Activities from './rightbar/Activities'
import '../styles/Rightbar.scss'

export default function Rightbar() {
  return (
    <div className='rightbar1'>
        <Topbuttons/>
        <Tabs/>
        <Activities/>
    </div>
  )
}
