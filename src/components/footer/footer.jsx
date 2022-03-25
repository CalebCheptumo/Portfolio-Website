import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'




const footer = () => {
    return (
        <footer>
            
            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/calebcheptumo/"><BsLinkedin/></a>
                <a href="https://twitter.com/caleb_cheptumo"><BsTwitter/></a>
                <a href="https://www.instagram.com/calebcheptumo/"><BsInstagram/></a>
              
            </div>
            <div className="footer__copyright">
                <small>&copy; Caleb Cheptumo.</small>
            </div>
        </footer>
    )
}

export default footer
