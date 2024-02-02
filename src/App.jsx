import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import DisplayParam from './components/DisplayParam'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>

          <Route path='/home' element= {<Home/>}/>

          <Route path='/:userInput' element={<DisplayParam/>}/>

          <Route path='/:userInput/:color/:backgroundColor' element={<DisplayParam/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
