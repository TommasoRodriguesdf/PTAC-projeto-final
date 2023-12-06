import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Registro from './Registro'
import Detalhe from './Detalhe'
import Destaque from './Destaque'
import "../fundo.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/detalhe" element={<Detalhe />}></Route>
        <Route path="/destaque" element={<Destaque />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
