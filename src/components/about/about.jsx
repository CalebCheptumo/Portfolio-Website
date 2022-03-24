import React from 'react'
import './about.css'
import ME from '../../assets/me.png'


const about = () => {
    return (
        <section id='about'> 
        <h5>Get to know</h5>
        <h2>About Me</h2>
        
        <div className='container about__container'>
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="caleb cheptumo" />
                </div>

            </div>
            <div className="about__content">
                   <p>A dedicated web developer with expertise creating web apps with JavaScript, Reactjs, Nodejs, and other other exciting tools and frameworks.</p>
                   <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
        </section>
    )
}

export default about
