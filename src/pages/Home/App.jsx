
import { ContextProvider } from '../../context/Context'
import SongDetailSection from '../songDetailSection'


function App() {
  

  return (
    <ContextProvider>
      <SongDetailSection/>
    </ContextProvider>
    
  )
}

export default App
