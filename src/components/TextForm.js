import React, { useState } from 'react'

function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const [click, setClicked] = useState(true);

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    setClicked(false);
    console.log("Uppercase was clicked!")
  };
   const handleClearAll = () => {
    setText("");
   }
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea className="form-control" value={text} onClick={()=>{click ? setText("") : setText(text)}} onChange={handleChange} id="mybox" rows="8"></textarea>
      
        </div>
      <button className='btn btn-primary' onClick={handleUpperCase}>Convert To UpperCase</button>
      <button className='btn btn-primary mx-2' onClick={handleClearAll}>Clear All</button>
    </div>
  )
}

export default TextForm;