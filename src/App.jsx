
import { useEffect, useState } from 'react'
import Footer from './components/footer'
import Header from './components/header'
import { ContextProvider } from './context/Context'
import Routes from './routes'
import { Loading } from './pages/songDetailSection/style'
import Logo from './assets/logo-v3.svg'

function App() {
  
  const [isLoaded,setIsLoaded] = useState(false)

  window.addEventListener('load',() =>{

      setIsLoaded(true)
      
  })

  useEffect(() =>{
  
  },[isLoaded])

  return (
    <ContextProvider>
      {!isLoaded ? <Loading id='LoadingScreen'>
         <img src={Logo} alt="" className='animation_Loading' 
        />

    </Loading>
    :
    <></>
    }
    <Header/>
    <Routes/>
    <Footer/>
    </ContextProvider>
    
  )
}

export default App
