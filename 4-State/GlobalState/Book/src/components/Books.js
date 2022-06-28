import React, { useEffect } from 'react'
import axios from 'axios'
import { BooksellerContext, useContext } from '../context/context'
import { useNavigate } from 'react-router-dom'

export default function Books() {
  const [state, dispatch] = useContext(BooksellerContext);
  function getBooks() {
    axios
    .get("http://book-store-api-test.herokuapp.com/books")
    .then((response) => {
      dispatch({ type:"FETCH_BOOKS", payload: response.data});
    });
  }
  useEffect( () => {
    getBooks();},[]);
    console.log(state);
    const bList = state.books.map((b) => {
      return(
        <tr key={b.id}>
          <td>{b.id}</td>
          <td><img src= {b.imgUrl} style={{ height:"350", width:"150"}}/></td>
          <td>{b.name}</td>
          <td>{b.author}</td>
          <td>{b.about}</td>
        </tr>
      )
    })


  return (
    <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Image</th>
          <th>Name</th>
          <th>Author</th>
          <th>About</th>
        </tr>
      </thead>
      <tbody>
        {bList}
      </tbody>
    </table>
  )
}
