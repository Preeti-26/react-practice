
import React, {useState} from 'react'

export default function TextHome(props) {
    //Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [text, setText] = useState('')
    function setTextValue(event){
        setText(event.target.value)
    }
    function converToUpper(event){
        const  valueUp = text.toUpperCase()
        setText(valueUp)
        props.showAlert('Converted into UpperCase', 'success');
    }

    function converToLower(event){
        const  valueUp = text.toLowerCase()
        setText(valueUp)
        props.showAlert('Converted into LowerCase', 'success');
    }
    function clearText(){
        setText('');
        props.showAlert('Text Cleared', 'success');
    }
    function copyText(){
        let textAreaEle = document.getElementById('myBox');
        // Copy the text inside the text field
        navigator.clipboard.writeText(text);
        props.showAlert('Text copyed', 'success');
    }
    function removeSpaces(){
        setText(text.replace(/\s+/g,' '));
        props.showAlert('Removed extra spaces', 'success');
    }
  return (
    <>
        <div className="mb-3 container" style={{color: props.mode === 'light' ? '#05293e' : 'white'}}> {/*color using style*/}
            <h2 >{props.heading}</h2>   
            <textarea className="form-control mb-4" id="myBox" rows="8" style={{backgroundColor: props.mode === 'light' ? 'white' : '#bdbeed', color: props.mode === 'light' ? '#05293e' : 'black'}} placeholder='Enter text here' value={text} onChange={setTextValue}></textarea>   
            <button type="button" disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={converToUpper}>ToUpper</button> 
            <button type="button" disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={converToLower}>ToLower</button> 
            <button type="button" disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={clearText}>Clear Text</button> 
            <button type="button" disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={copyText}>Copy Text</button> 
            <button type="button" disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={removeSpaces}>Remove Spaces</button> 

        </div>
        <div className={props.mode === 'dark' ? 'fontLight container' : 'fontDark container'}>  {/*color using className*/}
            <h3 >Your Text Summary</h3>
            <p>Characters count {text.length}</p> 
            <p>Words count {text.split(' ').filter((el)=>{return el.length!=0}).length}</p>
            <h2>Preview</h2>
            <p>{text.length>0? text : "Enter somthing in the text area above to preview it here"}</p>
        </div>   

    </>
  )
}
