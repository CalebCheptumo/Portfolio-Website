import React from 'react'
import './header.css'
import CTA from './cta'
import ME from '../../assets/me.png'
import HeaderSocial from './headerSocials'


const header = () => {
    return (
       <header>
           <div className = "container header__container">
               <h5>Hello I'm</h5>
               <h1>Caleb Cheptumo</h1>
               <h5 className = "text-light">Web developer</h5>
               <CTA />
               <HeaderSocial/>
               
               <div className="me">
                   
                   <img src= {ME} alt="Caleb cheptumo"  />
               </div>
               <a href="#contact" className='scroll__down'>Scroll Down</a>

           </div>

       </header>
    )
}

export default header
