import React from 'react'
import '../../styles/Workspace.scss';
import { IconContext } from "react-icons"
import { BiClipboard } from "react-icons/bi"

export default function Blank() {
  return (
    <div className='blank'>
        <IconContext.Provider value={{size: '8rem'}}>
            <div><BiClipboard/></div>
        </IconContext.Provider>
        <div className='heading'>Your workspace is empty!</div>
        <div className='text'>To add a tab, click on any button on your bottom left</div>
    </div>
  )
}
