
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
  return (
    <>
        <div className="mb-3 container" style={{color: props.mode === 'light' ? '#05293e' : 'white'}}> {/*color using style*/}
            <h2 >{props.heading}</h2>   
            <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode === 'light' ? 'white' : '#e7ddc7', color: props.mode === 'light' ? '#05293e' : 'black'}} placeholder='Enter text here' value={text} onChange={setTextValue}></textarea>   
            <button type="button" className="btn btn-primary my-2" onClick={converToUpper}>ToUpper</button> 
            <button type="button" className="btn btn-primary mx-2" onClick={converToLower}>ToLower</button> 
            <button type="button" className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button> 

        </div>
        <div className={props.mode === 'dark' ? 'fontLight' : 'fontDark'}>  {/*color using className*/}
            <h3 >Your Text Summary</h3>
            <p>Characters count {text.length}</p> 
            <p>Words count {text.split(' ').length}</p>
        </div>   

    </>
  )
}
