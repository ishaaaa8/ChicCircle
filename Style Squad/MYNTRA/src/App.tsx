import React from 'react'
import Main from './components/Main'
import Login from './components/Login'
import {Routes,Route} from "react-router-dom"
import Products from './components/Products'
import Details from './components/Details'
import Wishlist from './components/Wishlist'
import Navbar from './components/Navbar'
import TryOnPage from './components/TryOnPae'
import Friends from '../../../../../Friends'

const App = () => {
  return (
<>
<Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/products' element={<Products/>}/>
  <Route path='/details' element={<Details/>}/>
  <Route path='/wishlist' element={<Wishlist/>}/>
  <Route path='/try-on/:title' element={<TryOnPage/>}/>
  {/* <Route path="/friends" element={<Friends />} /> */}
</Routes>
</>
  )
}

export default App
