import React from 'react';
import Search from './components/Search'


const GetText = (text) => {
    console.log(text);
}

export default function App() {
  return (
    <div>
      <Search GetText = {GetText}/>
    </div>
  )
}
