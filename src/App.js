import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextHome from './components/TextHome';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


import { useState } from "react";
import About from './components/About';

function App() {
  const data = {
    navTitle: 'TextUtiles',
    aboutText: 'About Text'
  }
  const [mode, setMode] = useState('light'); // whether dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    console.log('alert call');
    setAlert({msg: message, type: type});
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toggleMode(){
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#05293e';
      showAlert('Dark mode has been enabled ', 'success');
      // document.title = "TextUtils - Dark Mode"
    } else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = "TextUtils - Light Mode"

    }
  }

  return (
    <>
      <Router>
      <Navbar {...data} mode={mode} toggleMode={toggleMode} />
      {/*  <Navbar /> */}
      <Alert alert={alert}/>
      <div className='container my-3'>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          
            <Route path="/about" element={<About />} />
              
            <Route path="/" element={<TextHome heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert} mode={mode} />} />
              
          
          
        </Routes>
      </div>
      </Router>
    </>    
  );
}

export default App;
