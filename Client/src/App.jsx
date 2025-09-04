import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
const App = () => {
  return (
    <div className='p-22 w-full min-h-screen'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
