import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { clear } from '@testing-library/user-event/dist/clear';

export default function TextForm(props) {
    const handleUpClick= ()=>{    
        //Creating a function to handle the button click event
        //console.log("Uppercase button clicked");
        let convertedText= text.toUpperCase();  
        setText(convertedText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick= ()=>{
        //console.log("Lowercase button is clicked");
        let lowerText= text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick= ()=>{
        //console.log("Clear pressed");
        let clearedText="";
        setText(clearedText);
        props.showAlert("Cleared text ","success");
    }
    const handleOnChange= (event)=>{    
        //Creating a function to handle the button click event
        //console.log("Onchange clicked");
        setText(event.target.value);        
    }
    const[text, setText]= useState('') //default value of text is this: blank
    
    return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} 
            style= {{backgroundColor: props.mode==='dark'?'#13466e':'white', 
            color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} 
            placeholder="Enter the text here" id="myBox" rows="8">
            </textarea>

            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-secondary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-info mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        </div>

    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>Reading time: {0.05 * text.split(" ").filter((element)=>{return element.length!==0}).length } minutes</p>

        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter something above to preview here"}</p>
    </div>
    </>
  );
}
