import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  let change=()=>{}
  function changeS(callback) {
    change=callback;
  }
  return (
    <div className="App">
      <button onClick={()=>{change('blue')}}>change background of btn</button>
      <Child changeS={changeS} />
    </div>
  );
}

function Child(props) {
  const[color,setColor]=useState('orange')
  useEffect(()=>{
    props.changeS(setColor)
  },[])
  return(
    <button style={{backgroundColor: color}}>child btn</button>
  )
}

export default App;