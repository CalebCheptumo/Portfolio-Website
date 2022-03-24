import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'



const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'><FaHome/></a>
      <a href="#about"><FaUser/></a>
      <a href="#portfolio"><AiOutlineFundProjectionScreen/></a>
      <a href="#contact"><BiMessageRounded/></a>
    </nav>
  )
}

export default Nav