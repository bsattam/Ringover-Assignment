import React, { useState } from 'react'
import '../../styles/Workspace.scss'
import { IconContext } from "react-icons";
import { RiUserVoiceFill } from "react-icons/ri";
import { IoMdDocument } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";

import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../redux/toggleSidebarSlice'

export default function Heading() {

  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', ()=>setWidth(window.innerWidth));

  const dispatch = useDispatch()

  const clickHandler = (event) => {
    event.stopPropagation();
    dispatch(toggle());
  }

  return (
    <div className='workspaceHeading'>
        <div className='headingText'>
            <h4>Workspace</h4>
        </div>
        <div className='headingButtons'>
            <IconContext.Provider value={{size: '1.3rem'}}>
                <RiUserVoiceFill/>
                <IoMdDocument/>
                {width <= 1000 && <BsThreeDotsVertical onClick={clickHandler}/> }
            </IconContext.Provider>
        </div>
    </div>
  )
}
