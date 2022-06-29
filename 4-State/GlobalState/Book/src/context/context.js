import React, { useContext, useReducer } from "react";

const BooksellerContext = React.createContext();

const initialState = {
    books : [],
    book: {}
};

const reducer = (state, action) => {
    switch(action.type){
        case "FETCH_BOOKS" :
           return{
            ...state,
            books:action.payload
           }

           //state içinde seçilen book var. action.payload editlenmiş hali var. Son halini "book" a atıyoruz.
           case "FETCH_BOOK_ID" :
           return{
            ...state, book:action.payload
           
           };

           default:
            return state;
            
    }
}

// bütün contextlerde olur
// props ilgili compıonente geçiyor 
// gelen state i initialState e gönderiyo 
// işliyo ve geri yolluyor
const BooksellerProvider = (props) => {
    const [state, dispatch] = useReducer(reducer,initialState);

    return (
        <BooksellerContext.Provider value = {[state, dispatch]}>
            {props.children}    
        </BooksellerContext.Provider>
    );
}

export {BooksellerProvider, useContext, BooksellerContext}