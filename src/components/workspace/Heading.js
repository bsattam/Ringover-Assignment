import React from 'react'
import '../../styles/Workspace.scss'
import { IconContext } from "react-icons";
import { RiUserVoiceFill } from "react-icons/ri";
import { IoMdDocument } from "react-icons/io";

export default function Heading() {
  return (
    <div className='workspaceHeading'>
        <div className='headingText'>
            <h4>Workspace</h4>
        </div>
        <div className='headingButtons'>
            <IconContext.Provider value={{size: '1.3rem'}}>
                <RiUserVoiceFill/>
                <IoMdDocument/>
            </IconContext.Provider>
        </div>
    </div>
  )
}
