import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'




const footer = () => {
    return (
        <footer>
            <ul className='permalinks'>
                <li><a href="#"></a>Home</li>
                <li><a href="#about"></a>About</li>
                <li><a href="portfolio"></a>Portfolio</li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="linkedin"><BsLinkedin/></a>
                <a href="twitter"><BsTwitter/></a>
                <a href="instagram"><BsInstagram/></a>
              
            </div>
            <div className="footer__copyright">
                <small>&copy; Caleb Cheptumo.</small>
            </div>
        </footer>
    )
}

export default footer
