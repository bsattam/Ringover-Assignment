import React from 'react'
import '../../styles/Rightbar.scss'
import { IconContext } from "react-icons"
import { RiMailUnreadFill } from "react-icons/ri"
import { AiFillEye } from "react-icons/ai"
import { MdAdsClick } from "react-icons/md"
import { HiPhoneOutgoing } from "react-icons/hi"
import { MdPhoneMissed } from "react-icons/md"
import { RiErrorWarningFill } from "react-icons/ri"
import { MdMarkChatUnread } from "react-icons/md"


export default function Activities() {
  return (
    <div className='activities'>
        
        <div className='activity'>
            <div className='topSection'>
                <IconContext.Provider value={{size: '1.3rem'}}>
                    <div className='icon color1'><RiMailUnreadFill/></div>
                </IconContext.Provider>
                <div className='text'>
                    <div className='name'>Aymeric Vanbock</div>
                    <div className='subject'>Subject: Schedule a new meeting tomorrow at San Fransisco.</div>
                </div>
                <div className='date'>10:45 AM</div>
            </div>
            <div className='bottomSection'></div>
        </div>
        <div className='activity'>
            <div className='topSection'>
                <IconContext.Provider value={{size: '1.3rem'}}>
                    <div className='icon color1'><RiMailUnreadFill/></div>
                </IconContext.Provider>
                <div className='text'>
                    <div className='name'>Aymeric Vanbock</div>
                    <div className='subject'>Subject: Schedule a new meeting tomorrow at San Fransisco.</div>
                </div>
                <div className='date'>05/19</div>
            </div>
            <div className='bottomSection'>
                <IconContext.Provider value={{size: '1rem'}}>
                    <div className='icons'><AiFillEye/><div>13</div></div>
                    <div className='icons'><MdAdsClick/><div>7</div></div>
                </IconContext.Provider>
            </div>
        </div>
        <div className='activity'>
            <div className='topSection'>
                <IconContext.Provider value={{size: '1.3rem'}}>
                    <div className='icon color2'><HiPhoneOutgoing/></div>
                </IconContext.Provider>
                <div className='text'>
                    <div className='name'>Aymeric Vanbock</div>
                    <div className='subject'>Subject: Schedule a new meeting tomorrow at San Fransisco.</div>
                </div>
                <div className='date'>05/19</div>
            </div>
            <div className='bottomSection'>
                <input type='text' placeholder='Add a comment' className='inputField'/>
                <div className='inputButton'>Add</div>
            </div>
        </div>
        <div className='activity'>
            <div className='topSection'>
                <IconContext.Provider value={{size: '1.3rem'}}>
                    <div className='icon color3'><MdPhoneMissed/></div>
                </IconContext.Provider>
                <div className='text'>
                    <div className='name'>Aymeric Vanbock</div>
                    <div className='subject'></div>
                </div>
                <div className='date'>05/19</div>
            </div>
            <div className='bottomSection'></div>
        </div>
        <div className='activity'>
            <div className='topSection'>
                <IconContext.Provider value={{size: '1.3rem'}}>
                    <div className='icon color1'><RiMailUnreadFill/></div>
                </IconContext.Provider>
                <div className='text'>
                    <div className='name'>Aymeric Vanbock</div>
                    <div className='subject'>Subject: Schedule a new meeting tomorrow at San Fransisco.</div>
                </div>
                <div className='date'>05/19</div>
            </div>
            <div className='bottomSection color3'>
                <IconContext.Provider value={{size: '1.1rem'}}>
                    <RiErrorWarningFill/>
                </IconContext.Provider>
                <div>Bounced</div>
            </div>
        </div>
        <div className='activity'>
            <div className='topSection'>
                <IconContext.Provider value={{size: '1.3rem'}}>
                    <div className='icon color3'><MdMarkChatUnread/></div>
                </IconContext.Provider>
                <div className='text'>
                    <div className='name'>Aymeric Vanbock</div>
                    <div className='subject'>Subject: Schedule a new meeting tomorrow at San Fransisco.</div>
                </div>
                <div className='date'>05/19</div>
            </div>
            <div className='bottomSection'></div>
        </div>
        <div className='activity'>
            <div className='topSection'>
                <IconContext.Provider value={{size: '1.3rem'}}>
                    <div className='icon color1'><RiMailUnreadFill/></div>
                </IconContext.Provider>
                <div className='text'>
                    <div className='name'>Aymeric Vanbock</div>
                    <div className='subject'>Subject: Schedule a new meeting tomorrow at San Fransisco.</div>
                </div>
                <div className='date'>05/19</div>
            </div>
            <div className='bottomSection'></div>
        </div>
        <div className='activity'>
            <div className='topSection'>
                <IconContext.Provider value={{size: '1.3rem'}}>
                    <div className='icon color1'><RiMailUnreadFill/></div>
                </IconContext.Provider>
                <div className='text'>
                    <div className='name'>Aymeric Vanbock</div>
                    <div className='subject'>Subject: Schedule a new meeting tomorrow at San Fransisco.</div>
                </div>
                <div className='date'>05/19</div>
            </div>
            <div className='bottomSection'></div>
        </div>
        <div className='activity'>
            <div className='topSection'>
                <IconContext.Provider value={{size: '1.3rem'}}>
                    <div className='icon color1'><RiMailUnreadFill/></div>
                </IconContext.Provider>
                <div className='text'>
                    <div className='name'>Aymeric Vanbock</div>
                    <div className='subject'>Subject: Schedule a new meeting tomorrow at San Fransisco.</div>
                </div>
                <div className='date'>05/19</div>
            </div>
            <div className='bottomSection'></div>
        </div>
        <div className='activity'>
            <div className='topSection'>
                <IconContext.Provider value={{size: '1.3rem'}}>
                    <div className='icon color1'><RiMailUnreadFill/></div>
                </IconContext.Provider>
                <div className='text'>
                    <div className='name'>Aymeric Vanbock</div>
                    <div className='subject'>Subject: Schedule a new meeting tomorrow at San Fransisco.</div>
                </div>
                <div className='date'>05/19</div>
            </div>
            <div className='bottomSection'></div>
        </div>
        <div className='activity'>
            <div className='topSection'>
                <IconContext.Provider value={{size: '1.3rem'}}>
                    <div className='icon color1'><RiMailUnreadFill/></div>
                </IconContext.Provider>
                <div className='text'>
                    <div className='name'>Aymeric Vanbock</div>
                    <div className='subject'>Subject: Schedule a new meeting tomorrow at San Fransisco.</div>
                </div>
                <div className='date'>05/19</div>
            </div>
            <div className='bottomSection'></div>
        </div>
    </div>
  )
}
