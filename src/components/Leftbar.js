import React from 'react'
import '../styles/Leftbar.scss'
import TopDetails from './leftbar/TopDetails'
import Topics from './leftbar/Topics'
import Contacts from './leftbar/Contacts'
import Additional from './leftbar/Additional'
import Buttons from './leftbar/Buttons'

export default function Leftbar() {
  return (
    <div className='leftbar'>
        <TopDetails/>
        <Topics/>
        <Contacts/>
        <Additional/>
        <Buttons/>
    </div>
  )
}
