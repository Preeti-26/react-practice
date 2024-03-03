import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Navbar(props) {
  
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} nav-bg-${props.mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.navTitle}</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {/* exact for match exact route */}
                  <Link className="nav-link active" exact="true" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" exact="true" to="/about">{props.aboutText}</Link>
                </li>
              </ul>
              {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
              <div  className='d-flex'>
                <div className='bg-primary rounded mx-2 border border-success' onClick={()=>{props.toggleMode('primary')}} style={{height:'25px', width:'25px' }}></div>
                <div className='bg-success rounded mx-2' onClick={()=>{props.toggleMode('success')}} style={{height:'25px', width:'25px' }}></div>
                <div className='bg-danger rounded mx-2' onClick={()=>{props.toggleMode('danger')}} style={{height:'25px', width:'25px' }}></div>
                <div className='bg-warning rounded mx-2 border  border-light' onClick={()=>{props.toggleMode('warning')}} style={{height:'25px', width:'25px' }}></div>
                <div className='bg-light rounded mx-2 border  border-dark' onClick={()=>{props.toggleMode('light')}} style={{height:'25px', width:'25px' }}></div>
                <div className='bg-dark rounded mx-2 border  border-light' onClick={()=>{props.toggleMode('dark')}} style={{height:'25px', width:'25px' }}></div>
              </div>

              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" onClick={()=>{props.toggleMode(null)}} id="flexSwitchCheckDefault"/>
                <label className="form-check-label text-line" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
              </div>
              
            </div>
          </div>
        </nav>
    </>
  )
}

Navbar.propTypes ={
    navTitle: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}
export default Navbar;
Navbar.defaultProps = {
  navData: {
    navTitle: 'Title default',
    aboutText: 'About default'
  }
}