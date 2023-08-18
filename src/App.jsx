
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Display from './components/Display'
import DisplayWithService from './components/ComponetsWithServices/DisplayWithService'
 

function App() {

  return (
    <>
    <Link to='/display'>View service</Link>
    <Routes>
      <Route path='/' element={<Display/>}/>
      <Route path='/display' element={<DisplayWithService/>}/>

    </Routes>
    </>
  )
}

export default App
