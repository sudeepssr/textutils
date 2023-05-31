import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App(){

  const[mode,setMode]= useState('light');
  const[alert,setAlert]= useState(null);  //creating a state for state

  const showAlert= (message,type)=>{    
    
      setAlert({          //now, while trying to set an alert, we are trying to create an object of alert and set it ion setAlert.
        msg: message,
        type: type,
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  };

  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
    
  }

  return (
    <>
    <Router>
      
      <Navbar title="TextUtils" mode = {mode} about="About Us" toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>

      <div className="container">
        
          <Routes>
            
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze"  
              mode={mode} showAlert={showAlert} />}>
            </Route>

            </Routes>
        
      </div>
        
      </Router> 
    </>
  );
}