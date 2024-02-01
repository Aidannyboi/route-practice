import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/home' element= {<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
