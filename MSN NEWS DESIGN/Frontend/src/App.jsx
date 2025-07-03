import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SingUpForm from './auth/forms/SingUpForm'
import Home from './Pages/Home'
import About from './Pages/About'
import Deshboard from './Pages/Deshboard'
import NewsArticles from './Pages/NewsArticles'
import SingInForm from './auth/forms/SingInform'
import Header from './components/shared/Header'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/sing-in'} element={<SingInForm/>}/>
        <Route path={'/sing-up'} element={<SingUpForm/>}/>

        <Route path={'/home'} element={<Home/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/deshboard'} element={<Deshboard/>}/>
        <Route path={'/news'} element={<NewsArticles/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
