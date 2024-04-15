import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/login'
import Home from './component/Home'
import AddProduct from './component/AddProduct'
import GetProducts from './component/GetProducts'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/add/product' element={<AddProduct/>}/>
        <Route path='/get/products' element={<GetProducts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App