import React from 'react'
import { IconContext } from "react-icons";
import { IoMdCall } from "react-icons/io";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsCalendar2EventFill } from "react-icons/bs";
import { BsFillChatLeftFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export default function Buttons() {
  return (
    <IconContext.Provider value={{size: '1.1rem'}}>
        <div className='buttons'>
            <div className='callBigButton'><IoMdCall/></div>
            <div className='smallButtons'>
                
                <div><BsFillCameraVideoFill/></div>
                <div><BsCalendar2EventFill/></div>
                <div><GrMail/></div>
                <div><BsFillChatLeftFill/></div>
            </div>
        </div>
    </IconContext.Provider>
  )
}
