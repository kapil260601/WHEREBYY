import React, { useState } from 'react';
import "../index.css";
const TextForm = (props) => {

    const handleUpClick = () => {
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleDownClick = () => {
      // console.log("Uppercase was Clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase!", "success");

  }

  const handleClearClick = () => {
    // console.log("Uppercase was Clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Clear Text!", "success");
}

const handleCopy = () => {
  console.log("I am Copy");
  var text = document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(text.value);
  props.showAlert("Copy Text", "success");

}

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
       let newText = text.split(/[ ] +/);
       setText(newText.join(" "));
       props.showAlert("Remove Extra Spaces!", "success");

  }

    const [text, setText] = useState("");

  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 className='Head'>{props.heading}</h1>
        <div className='mb-3'>
         <textarea htmlFor="myBox" className='form-control text' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}}id='myBox' rows='8'></textarea>
        </div>
        <button className='btn btn-secodary ms-2 but' onClick={handleUpClick}> Uppercase</button>
        <button className='btn btn-secodary ms-2 but' onClick={handleDownClick}> Lowercase</button>
        <button className='btn btn-secodary ms-2 but' onClick={handleClearClick}> ClearText</button>
        <button className='btn btn-secodary ms-2 but' onClick={handleCopy}> Copy Text</button>
        <button className='btn btn-secodary ms-2 but' onClick={handleExtraSpaces}> Extra Space</button>
     </div>
     <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2 className='Head'>Your Text Summary</h2>
      <p className='para'>{text.split (" ").length} words and {text.length} characters</p>
      <p className='para'>{0.008 * text.split (" ").length} Minutes read</p>
      <h2 className='Head'>Preview</h2>
      <p className='para'>{text.length>0?text:"Enter somethinng in the textbox above to preview it here"}</p>
     </div>
    </>
  );
}

export default TextForm;