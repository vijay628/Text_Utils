import React, { useState } from 'react'
import { jsPDF } from 'jspdf'
import { saveAs } from 'file-saver'
import copy from 'copy-to-clipboard';

function TextForm(props) {
  const [text, setText] = useState("Enter text here ");
  const [click, setClicked] = useState(true);
  const [copyBtnText, setCopyBtnText] = useState("Copy Text")

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
  const saveAsPdf = () => {
    if (text) {
      const pdf = new jsPDF();
      pdf.setFontSize(12);
      pdf.text(text, 15, 15);
      pdf.save("documents.pdf");
    }
    setClicked(false);
  };
  const saveAsTxt = () => {
    if (text) {
      const processedText = `[fontsize=12]${text}`;
      const blob = new Blob([processedText], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, "documents.txt");
    }
    setClicked(false);
  };

  const saveAsDocs = () => {
    if (text) {
      // Wrap the text in HTML with appropriate styling
      const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Document</title>
      <style>
        body {
          font-size: 16px; 
        }
      </style>
    </head>
    <body>
      <div style="font-size: 16px;">${text}</div> 
    </body>
    </html>
  `;

      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });

      saveAs(blob, "documents.docs");
    }
    setClicked(false);
  };
  const handleClearAll = () => {
    setText("");
  }
  const handleRemoveSpace = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    setClicked(false);
  };
  const copyToClipboard = () => {
    copy(text);
    setCopyBtnText("Copied to Clipboard");
    setClicked(false);
    setTimeout(() => {
      setCopyBtnText("Copy Text");
    }, 2000);
  };
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
        <button className='btn btn-primary mx-1 my-1' onClick={handleUpperCase}>Convert To Uppercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleLowerCase}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleRemoveSpace}>Remove Extra Space</button>
        <button type="button" onClick={copyToClipboard} class="btn btn-primary mx-1" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Copied to Clipboard">
          {copyBtnText}
        </button>
        <button className='btn btn-primary mx-1 my-1' onClick={handleClearAll}>Clear All</button>
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-primary dropdown-toggle mx-1 my-1" data-bs-toggle="dropdown" aria-expanded="false">
            Save As
          </button>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item" onClick={saveAsPdf}>Save as pdf</button></li>
            <li><button class="dropdown-item" onClick={saveAsTxt}>Save as txt</button></li>
            <li><button class="dropdown-item" onClick={saveAsDocs}>Save as docs</button></li>
          </ul>
        </div>
      </div>
      <div className='container my-2'>
        <h2>Your text summary</h2>
        <p>{text.trim() === "" ? "0" : text.trim().split(/\s+/).length} words, {text.trim().length} characters</p>
        <p>{text.trim() === "" ? 0.008 * 0 : 0.008 * (text.trim().split(/\s+/).length)} Minutes to read</p>
        <h3>Preview</h3>
        <p>{(text.length) === 0 ? "Nothing to preview" : text}</p>
      </div>
    </>
  )
}

export default TextForm;