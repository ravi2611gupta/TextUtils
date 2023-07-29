import React from 'react';
// for this use rfc ro rfce


// step 1 : import proptype for define the proptype.
import PropTypes from 'prop-types';
// for this use impt

import { Link } from 'react-router-dom';



// here we have to give the name of the function and name should be same to the file name. just like bellow. -->
// export default function(){  change it like bellow -->
export default function Navbar(props){
    
  return (
    // <div>
    //     hello I am a navbar
    // </div>

    // useing template litrals using {`.......`} this syntax. 
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          {/* 
          normal about menu
          <li className="nav-item">
            <a className="nav-link" href="/">about</a>
          </li> */}

          {/* using props in this menu */}
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.abouttxt}</Link>
          </li>
          
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-info" type="submit">Search</button>
        </form> */}

        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  );
}


// step 2: define here your proptype in the given syntax.
Navbar.propTypes = {
  // title:PropTypes.string,
  title:PropTypes.string.isRequired,
  abouttxt:PropTypes.string
} 
// if you forget the syntax go to the browser and search "react protype" and than go the documentation of react.




// Default Prop Values
// Specifies the default values for props:
Navbar.defaultProps = {
  title: 'Set title here',
  abouttxt: 'Set About text here'
};
