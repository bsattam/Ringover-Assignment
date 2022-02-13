import React from 'react'
import '../styles/Navbar.scss'
import { FaLifeRing } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { BsArrowLeftRight } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='icon-container'>
        <IconContext.Provider value={{size: '1.5em', className: 'ringIcon'}}>
          <div><FaLifeRing/></div>
        </IconContext.Provider>
        <div>Sales Machine</div>
      </div>
      <div className='inputContainer'>
        <input type='text' placeholder='Search' className='inputField'/>
        <IconContext.Provider value={{size: '1.5em', className: 'searchIcon'}}>
          <AiOutlineSearch/>
        </IconContext.Provider>
      </div>
      <div className='imageContainer'>
        <img src="https://source.unsplash.com/random/200x200" alt='logo' width='35' height='35' className='image'/>
        <IconContext.Provider value={{size: '1.3em'}}>
          <BsArrowLeftRight/>
          <BsBoxArrowInRight/>
        </IconContext.Provider>
      </div>
    </div>
  )
}
