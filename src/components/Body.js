import React, { useState } from 'react'
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';
import Workspace from './Workspace';
import '../styles/Body.scss';
import ToggleRightbar from './ToggleRightbar';

import { useDispatch } from 'react-redux'
import { hide } from '../redux/toggleSidebarSlice'


export default function Body() {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', () => setWidth(window.innerWidth))

  const dispatch = useDispatch();
  const handleHide = () => {
    dispatch(hide());
  }

  return (
    <>
      <div className='body' onClick={handleHide}>
          <Leftbar/>
          <Workspace/>
          { width>1000 && <Rightbar/> }
      </div>
      <ToggleRightbar/>
    </>
  )
}
