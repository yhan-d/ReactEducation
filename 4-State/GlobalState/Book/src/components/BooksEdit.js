/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext, BooksellerContext} from '../context/context'
import axios from 'axios'

export default function BooksEdit() {
  const location = new useLocation(); // hangi sayfada olduğumuzu bulmak için kullanılır
  const [state, dispatch] = useContext(BooksellerContext);
  const book = state.book;
 
  const navigate = new useNavigate();
  const onChangeText = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    dispatch({
      type:"FETCH_BOOK_ID",
      payload: { ...book, [name]: value },
    });
  };
  function editBook() {
    axios
      .put("http://book-store-api-test.herokuapp.com/books/" + location.state.id, book)
      .then((response) => {
        if(response.status === 200) {
          alert("Book successfully updated");
          navigate("/")
        }
      });
  }
  function fetchBookById() {
    axios
      .get("http://book-store-api-test.herokuapp.com/books/" + location.state.id)
      .then((res) => {
        dispatch({ type: "FETCH_BOOK_ID", payload: res.data });
      });
  }
 useEffect(() => {
  fetchBookById()
 },[])


  console.log(state); 

  return (
    <div className='row'>
      <div className='col-md-5'>
        <input
          className='form-control'
          type="text"
          value={book.name}
          name="name"
          onChange={onChangeText}
        />
        <input
          className='form-control'
          type="text"
          value={book.author}
          name="author"
          onChange={onChangeText}
        />
        <input className='btn btn-success' type='submit' value='Value' onClick={ () => editBook()}/>
      </div>

    </div>
  )
}
