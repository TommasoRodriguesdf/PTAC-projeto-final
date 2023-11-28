import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Registro from './Registro'
import Detalhe from './Detalhe'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/detalhe" element={<Detalhe />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
