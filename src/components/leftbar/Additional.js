import React from 'react'
import { IconContext } from "react-icons";
import { GrMail } from "react-icons/gr";
import { GiFragrance } from "react-icons/gi";
import { BiPaperclip } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";

export default function Additional() {
  return (
    <div className='additional'>
        <h4>Additional</h4>
        <IconContext.Provider value={{size: '1.1rem'}}>
          <div className='contactsList'>
            <div className='item'>
              <GrMail/>
              <div>president@ringover.com</div>
            </div>
            <div className='item'>
              <GiFragrance/>
              <div>Francais</div>
            </div>
            <div className='item'>
              <BiPaperclip/>
              <div>www.youtube.com/ringover</div>
            </div>
            <div className='item'>
              <BsGlobe/>
              <div>Indian Standard (+5:30)</div>
            </div>
          </div>
        </IconContext.Provider>
    </div>
  )
}
