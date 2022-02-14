import React from 'react'
import { IconContext } from "react-icons";
import { IoMdCall } from "react-icons/io";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsCalendar2EventFill } from "react-icons/bs";
import { BsFillChatLeftFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import { useSelector, useDispatch } from 'react-redux'
import { addTab, removeTab } from '../../redux/workspaceSlice'

export default function Buttons() {

  const dispatch = useDispatch()
  
  const addCall = () => {
    const id = Date.now();
    dispatch(addTab({
      id,
      type:'call'
    }))
  }
  const addVideoCall = () => {
    const id = Date.now();
    dispatch(addTab({
      id,
      type:'videoCall'
    }))
  }
  const addCalendar = () => {
    const id = Date.now();
    dispatch(addTab({
      id,
      type:'calendar'
    }))
  }
  const addMail = () => {
    const id = Date.now();
    dispatch(addTab({
      id,
      type:'mail'
    }))
  }
  const addChat = () => {
    const id = Date.now();
    dispatch(addTab({
      id,
      type:'chat'
    }))
  }

  return (
    <IconContext.Provider value={{size: '1.1rem'}}>
        <div className='buttons'>
            <div className='callBigButton' onClick={addCall}><IoMdCall/></div>
            <div className='smallButtons'>
                
                <div onClick={addVideoCall}><BsFillCameraVideoFill/></div>
                <div onClick={addCalendar}><BsCalendar2EventFill/></div>
                <div onClick={addMail}><GrMail/></div>
                <div onClick={addChat}><BsFillChatLeftFill/></div>
            </div>
        </div>
    </IconContext.Provider>
  )
}
