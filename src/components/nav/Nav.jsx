import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'
import { useState } from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav  === '#' ? 'active' : ''} ><FaHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav  === '#about' ? 'active' : ''}><FaUser/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav  === '#portfolio' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav  === '#contact' ? 'active' : ''}><BiMessageRounded/></a>
    </nav>
  ) 
}

export default Nav