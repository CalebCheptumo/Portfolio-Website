import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/p1.png'
import IMG2 from '../../assets/p2.png'
import IMG3 from '../../assets/p3.png'


const data = [
    {
        id:1,
        image:IMG1,
        title: 'UI KIT',
        github:'',
        demo:'',
    },
    {
        id:2,
        image:IMG2,
        title: 'Analysis tool',
        github:'',
        demo:'',
    },
    {
        id:3,
        image:IMG3,
        title: 'Tracking Tool',
        github:'',
        demo:'',
    },
]

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Featured projects:</h5>

            <div className='container portfolio__container'>
          {
            data.map(({id,image,title,github,demo}) => {
                return(
                 <article className='portfolio__item'>
                     <div className="portfolio__item-image">
                         <img src={image} alt={title} />
                     </div>
                     <h3>{title}</h3>
                     <div className="portfolio__item-cta">
                     <a href={demo} className='btn btn-primary' target='_blank'>View Live</a>
                     <a href={github} className='btn' target='_blank'>Github Repo</a>
                     </div>
                     
                 </article>
                )
            })
        }
            </div>
        
           </section>
    )
}

export default portfolio
