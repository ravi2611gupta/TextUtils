// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router,
    Route,
    Switch
   } from 'react-router-dom';

function App() {
  
  const [mode, setMode] = useState('light'); //Whether dark mode is enable of not
  const [alert, setAlert] = useState(null);
  
  // for switch
  const toggleMode =()=>{
    if(mode === 'light'){
      // setMode = 'dark'; //wrong method
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils : : Dark Mode';

      // setInterval(() => {
      //   document.title = 'TextUtils : : TextUtils is Amezing App';
      // }, 2000);
      
      // setInterval(() => {
      //   document.title = 'TextUtils : : Install TextUtils Now';
      // }, 1500);


    }else{
      // setMode = 'light';
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils : : Light Mode';
    }
  }

  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  setTimeout(() => {
    setAlert(null);
  }, 3000);
  





  return (
  //  fragment start
   <>
  <Router>

    {/* <Navbar/> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} abouttxt="About"/>
    <Alert alert={alert}/>
    

    {/* TextForm */}
    <div>

        <Switch>
          
        <Route exact path="/">
          <TextForm heading="Try TextUtils :- Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert} mode={mode}/>
          </Route>
          
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          
        </Switch>
    
     
    </div>

    </Router>
   </>
  //  fragment end
  );
}

export default App;
