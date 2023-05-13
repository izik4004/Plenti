
import './index.css'
import  "aos/dist/aos.css"
import Aos from "aos"
import Homepage from './pages/Homepage'

const App = () => {
    Aos.init({
      duration:1000,
      offset:100,
    })  

  return (
    <>
      <Homepage/>
    </>
  )
}

export default App
