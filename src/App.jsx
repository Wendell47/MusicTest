
import { useEffect, useState } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import { ContextProvider } from './context/Context'
import Routes from './routes'



function App() {
  
  
  return (
    <ContextProvider>
     
    <Header/>
    <Routes/>
    <Footer/>
    </ContextProvider>
    
  )
}

export default App
