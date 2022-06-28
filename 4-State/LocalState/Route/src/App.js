import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Layout from './components/Layout'
import Contacts from './components/Contacts'
import PageNotFound from './components/PageNotFound'


export default function App() {

  return (
    <BrowserRouter>
      <Layout/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}
