import React from 'react'
import { IconContext } from "react-icons";
import { GrMail } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";

export default function Contacts() {
  return (
    <div className='contacts'>
        <h4>Contact</h4>
        <IconContext.Provider value={{size: '1.1rem'}}>
          <div className='contactsList'>
            <div className='item'>
              <GrMail/>
              <div>j.najnudel@ringover.com</div>
            </div>
            <div className='item'>
              <BsTelephoneFill/>
              <div>+33 07 55 35 23 21</div>
              <span>Primary</span>
            </div>
            <div className='item'>
              <BsTelephoneFill/>
              <div>+33 99 53 05 19 21</div>
            </div>
          </div>
        </IconContext.Provider>
    </div>
  )
}
