
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './assets/css/style.css'
import Index from './pages/Index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Register from './pages/Register'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
