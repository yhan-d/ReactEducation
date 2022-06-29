import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Books from "./components/Books"
import BooksEdit from "./components/BooksEdit"
import Layout from './components/Layout'
import PageNotFound from './components/PageNotFound'


export default function App() {

  return (
    <BrowserRouter>
      <Layout/>
        <Routes>
          <Route path="/" element={<Books/>}/>
          <Route path="/books" element={<Books/>}/>
          {/* <Route path="book" element={<Book/>}/> */}
          <Route path="/book/edit/:id" element={<BooksEdit/>}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}
