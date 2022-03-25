import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/calebcheptumo/" target='_blank'><BsLinkedin/> </a>
        <a href="https://github.com/CalebCheptumo" target= '_blank'><BsGithub/></a>
        <a href="https://twitter.com/caleb_cheptumo" target= '_blank'><BsTwitter/></a>
    </div>
  )
}

export default headerSocials