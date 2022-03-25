import React from 'react'
import './cta.css'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillEyeFill} from 'react-icons/bs'
const cta = () => {
    return (
        <div  className = 'cta'>
            <a href="#about" className='btn btn-primary'>About Me<AiOutlineUser className='cta-icon'/></a>
            <a href="#portfolio" className='btn'>Projects<BsFillEyeFill className='cta-icon'/></a>
        </div>
    )
}

export default cta
