import React from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFillEyeFill} from 'react-icons/bs'
const cta = () => {
    return (
        <div  className = 'cta'>
            <a href="#about" className='btn btn-primary'>About Me<AiOutlineUser/></a>
            <a href="#portfolio" className='btn'>Projects<BsFillEyeFill/></a>
        </div>
    )
}

export default cta
