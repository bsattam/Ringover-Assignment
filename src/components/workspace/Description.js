import React from 'react'
import Mail from './Mail'
import { IconContext } from "react-icons"
import { AiOutlineClose } from "react-icons/ai"
import '../../styles/Workspace.scss'



export default function Description() {
  return (
    <div className='workspaceDescription'>
        <div className='tabsContainer'>
            <IconContext.Provider value={{size: '1.1rem'}}>
                <div className='tab active'>
                    <div className='tabName'>Schedule</div>
                    <div className='tabClose'> <AiOutlineClose/></div>
                </div>
                <div className='tab'>
                    <div className='tabName'>Mail - Compose</div>
                    <div className='tabClose'> <AiOutlineClose/></div>
                </div>
            </IconContext.Provider>
        </div>

        <div className='main'>
            <Mail/>
        </div>
    </div>
  )
}
