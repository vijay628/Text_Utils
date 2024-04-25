import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react'

function App() {
const [clicked, setClicked] = useState(true)
const [about, setabout] = useState(false);
const [mode, setMode] = useState("dark")
const showAbout = () =>{
setabout(true);
setClicked(false);
};
const toggelMode = () =>{
if(mode === "dark"){
setMode("light");
document.body.style.backgroundColor = "white"
}
else{
  setMode("dark");
  document.body.style.backgroundColor = "gray"
}
};
  return (
    <div >
      <Navbar title="TextUtils" showAbout={()=>showAbout} about={about} mode={mode} toggelMode={toggelMode}/>
      {clicked && (
           <div className='container my-3'>
           <TextForm heading="Enter your text to analyze" />
           </div>
        )};
       
    </div>
  );
}

export default App;
