
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from './routes/routes'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Shop from './Pages/Shop'




function App() {

  return(
    
<div className='App'>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/menu' element={<Menu/>}/>
    <Route path='/shop' element={<Shop/>}/>
  </Routes>
 
</div>
  )
  
}

export default App
