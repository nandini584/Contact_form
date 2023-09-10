import Contact from './Pages/Contact'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <div className='bg'>
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
    </div>
  )
}

export default App