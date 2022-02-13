import React from 'react'
import Heading from './workspace/Heading'
import Description from './workspace/Description'
import '../styles/Workspace.scss'

export default function Workspace() {
  return (
    <div className='workspace'>
        <Heading/>
        <Description/>
    </div>
  )
}
