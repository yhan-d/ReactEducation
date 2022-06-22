import React from 'react';
import Search from './components/Search'


const onFormSubmit = (text) => {
    console.log(text);
}

export default function App() {
  return (
    <div>
      <Search onFormSubmit = {onFormSubmit}/>
    </div>
  )
}
