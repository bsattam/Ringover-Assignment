import React from 'react'
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';
import Workspace from './Workspace';
import '../styles/Body.scss';


export default function Body() {
  return (
    <div className='body'>
        <Leftbar/>
        <Workspace/>
        <Rightbar/>
    </div>
  )
}
