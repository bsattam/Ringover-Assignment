import React from 'react'
import '../../styles/Leftbar.scss'
import { IconContext } from "react-icons";
import { BsPencilFill } from "react-icons/bs";
import { BsShieldFillCheck } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillCloudFill } from "react-icons/bs";

export default function TopDetails() {
  return (
    <div className='topDetails'>
        <div className='heading'>
            <h4>Jean-Samuel Najnudel</h4>
            <div className='iconsContainer'>
                <IconContext.Provider value={{size: '1.1rem'}}>
                    <div><BsPencilFill/></div>
                    <div><BsShieldFillCheck/></div>
                </IconContext.Provider>
            </div>
        </div>

        <div className='faded'> President </div>

        <div className='company'>
            <div className='name'>Ringover</div>
            <div className='icon'>
                <IconContext.Provider value={{}}>
                    <BsFillPeopleFill/>
                </IconContext.Provider>
            </div>
            <div>101-250</div>
        </div>
        <a href="http://www.ringover.com" className='link'>http://www.ringover.com</a>

        <div className='mediaLinksContainer'>
            <IconContext.Provider value={{size: '1.2rem'}}>
                <div className='mediaLinks'>
                    <BsLinkedin/>
                    <BsFillCloudFill/>
                </div>
            </IconContext.Provider>
        </div>
    </div>
  )
}
