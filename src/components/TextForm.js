import React, { useState } from 'react'

function TextForm(props) {
  const [text, setText] = useState("Enter text here ");
  const [click, setClicked] = useState(true);

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    setClicked(false);
    console.log("Uppercase was clicked!")
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    setClicked(false);
  }
  const handleClearAll = () => {
    setText("");
  }
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onClick={() => { click ? setText("") : setText(text) }}
            onChange={handleChange} id="mybox" rows="6"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpperCase}>Convert To Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLowerCase}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearAll}>Clear All</button>
      </div>
      <div className='container my-2'>
        <h2>Your text summary</h2>
        <p>{(text.split(" ").length - 1)} words, {text.length} characters</p>
        <p>{0.008 * (text.split(" ").length - 1)} Minutes to read</p>
        <h3>Preview</h3>
        <p>{(text.length) === 0 ? "Nothing to preview" : text}</p>
      </div>
    </>
  )
}

export default TextForm;