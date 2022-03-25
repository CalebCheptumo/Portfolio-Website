import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/p1.png'
import IMG2 from '../../assets/p2.png'
import IMG3 from '../../assets/p3.png'

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Featured projects:</h5>

            <div className='container portfolio__container'>
                 <article className='portfolio__item'>
                     <div className="portfolio__item-image">
                         <img src={IMG1} alt="" />
                     </div>
                     <h3>Tracking Tool</h3>
                     <p>Tool to report expected and unexpected errors on website</p>
                     <div className="portfolio__item-cta">
                     <a href="" className='btn btn-primary' target='_blank'>View Live</a>
                     <a href="https://github.com" className='btn' target='_blank'>Github Repo</a>
                     </div>
                     
                 </article>
                 <article className='portfolio__item'>
                     <div className="portfolio__item-image">
                         <img src={IMG2} alt="" />
                     </div>
                     <h3>UI KIT</h3>
                     <div className="portfolio__item-cta">
                     <a href="" className='btn btn-primary' target='_blank'>View Live</a>
                     <a href="https://github.com" className='btn' target='_blank'>Github Repo</a>
                     </div>
                     
                 </article>
                 <article className='portfolio__item'>
                     <div className="portfolio__item-image">
                         <img src={IMG3} alt="" />
                     </div>
                     <h3>ANALYSIS TOOL</h3>
                     <div className="portfolio__item-cta">
                     <a href="" className='btn btn-primary' target='_blank'>View Live</a>
                     <a href="https://github.com" className='btn' target='_blank'>Github Repo</a>
                     </div>
                     
                 </article>
            </div>
        
           </section>
    )
}

export default portfolio
