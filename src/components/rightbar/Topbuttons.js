import React from 'react'
import '../../styles/Rightbar.scss'
import { IconContext } from "react-icons"
import { BiArrowFromBottom } from "react-icons/bi"
import { BsPauseFill } from "react-icons/bs"
import { BsStopFill } from "react-icons/bs"


export default function Topbuttons() {
  return (
    <div className='topbuttons'>
        <IconContext.Provider value={{size: '1.3rem'}}>
            <div className='salesforceButton'>
                <div><BiArrowFromBottom/></div>
                <div className='btn'>Salesforce</div>
            </div>
            <div className='smallButtons'>
                <div className='btn1'><BsPauseFill/></div>
                <div className='btn2'><BsStopFill/></div>
            </div>
        </IconContext.Provider>
    </div>
  )
}
