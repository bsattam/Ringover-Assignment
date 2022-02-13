import React from 'react'
import '../styles/Leftbar.scss'
import TopDetails from './leftbar/TopDetails'
import Topics from './leftbar/Topics'
import Contact from './leftbar/Contact'
import Additional from './leftbar/Additional'

export default function Leftbar() {
  return (
    <div className='leftbar'>
        <TopDetails/>
        <Topics/>
        <Contact/>
        <Additional/>
    </div>
  )
}
