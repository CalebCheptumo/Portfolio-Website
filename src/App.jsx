import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/Nav' 
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'


const App = () => {
    return (
        <>  
            
            <Header />
            <Nav />
            <About /> 
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default App
