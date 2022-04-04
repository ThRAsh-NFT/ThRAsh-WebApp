import React from 'react'
import GlobalStyles from "../styles/GlobalStyles"
import { ThemeProvider } from 'styled-components'
import { light } from "../styles/Themes"


import Header from '../components/Header'
import Home from '../components/sections/Home'
import About from '../components/sections/About'
import Guideline from '../components/sections/Guideline'
import Gallery from '../components/sections/Gallery'
import Team from '../components/sections/Team'
import Faq from '../components/sections/Faq'
import Footer from '../components/Footer'
import ScrollToTop from "../components/ScrollToTop";

const Main = () => {
  return (
    <div>
    <GlobalStyles />
      <ThemeProvider theme = {light}> 
        <Header />
        <Home />
        <About />
        <Guideline />
        <Gallery />
        <Team />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </div>
  )
}

export default Main