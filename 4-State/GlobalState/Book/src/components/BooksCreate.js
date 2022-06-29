import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function BookCreate() {
  const navigate = new useNavigate();
  const [newBook, setNewBook] = useState ({
    name:"",
    author:"",
    imgUrl:"",
    about:""
  });
  
  function createBook() {
        axios
          .post("http://book-store-api-test.herokuapp.com/books", newBook)
          .then((res) => {
            if(res.status === 201) {
              alert("Book created successfully");
              navigate("/");
            }
          });
    }
  function onChangeText(e) {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value })
    }

  return (
    <div className="row">
    <div className="col-md-5">
      <input
        className="form-control"
        type="text"
        value={newBook.name}
        name="name"
        onChange={onChangeText}
      />
      <input
        className="form-control"
        type="text"
        value={newBook.author}
        name="author"
        onChange={onChangeText}
      />
      <input  className="btn btn-success" type="submit" value ="Create" 
        onClick={() =>createBook()}
      />
    </div>
  </div>
  )
}
