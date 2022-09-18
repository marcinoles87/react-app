import React, { useState } from 'react';

import Task from './Task';

import './App.css';
import Substract from './Substrack';

function App() {

 const [text , setText] = useState("jestes nowy");

  const handleOnClick = () => {
    setText(text + "A")
    
  }

  return (
    <div className="App">
      App

     <Task value={text}/>
     <Substract/>
    <button onClick={handleOnClick}>Zerowanie</button>
    <p>Wynik to : {text}</p>
   
    
     
    </div>
  );
}

export default App;
