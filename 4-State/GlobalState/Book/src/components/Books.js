import React, { useEffect } from 'react'
import axios from 'axios'
import { BooksellerContext, useContext } from '../context/context'
import { useNavigate } from 'react-router-dom'

export default function Books() {
  const [state, dispatch] = useContext(BooksellerContext);
  const navigate = new useNavigate();
  function getBooks() {
    axios
    .get("http://book-store-api-test.herokuapp.com/books")
    .then((response) => {
      dispatch({ type:"FETCH_BOOKS", payload: response.data});
    });
  }
  
  useEffect( () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getBooks();},[]);
    console.log(state);
    const bList = state.books.map((b) => {
      return(
        <tr key={b.id}>
          <td>{b.id}</td>
          <td><img src= {b.imgUrl} style={{ height:"350", width:"150"}} alt=''/></td>
          <td>{b.name}</td>
          <td>{b.author}</td>
          <td>{b.about}</td>
          <td>
            <button className='btn btn-success' onClick={() => navigate("/book/edit/" + b.id,{
              state: {id: b.id},
            })}>
              Edit Book
            </button>
          </td>
        </tr>
      )
    })


  return (
    <div>
     
      <button className='btn btn-primary' onClick={() => navigate("/book/create")}>New Book</button>

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
  </table></div>
    
  )
}
