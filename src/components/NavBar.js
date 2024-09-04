import React, { Component } from 'react'
import {Link} from "react-router-dom"


export default class Navbar extends Component {
  render() {
    return (
      <div>
              <nav className="navbar fixed-top navbar-expand-lg bg-dark" >
      {/* // <nav className="navbar navbar-expand-lg " style={{backgroundColor:"#BDB76B"}}> */}
  <div className="container-fluid " >
    <Link className="navbar-brand" style={{color:"blue" ,weight:"bold"}} to="/">{this.props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link "  style={{color:"white" ,weight:"bold"}} aria-current="page" to="/">Home</Link> */}
        </li>
        <li className="nav-item">
        <Link className="nav-link" style={{color:"white" ,weight:"bold"}} to="/General">General</Link></li>
        <li><Link className="nav-link" style={{color:"white" ,weight:"bold"}} to="/Business">Business</Link> </li>
          {/* <li><Link className="nav-link" style={{color:"white" ,weight:"bold"}} to="/Home">Home</Link> </li> */}
        <li><Link className="nav-link" style={{color:"white" ,weight:"bold"}} to="/Health">health</Link></li>
        <li><Link className="nav-link" style={{color:"white" ,weight:"bold"}} to="/Sports">Sports</Link></li>
        <li><Link className="nav-link" style={{color:"white" ,weight:"bold"}} to="/Science">Science</Link></li>
        <li><Link className="nav-link" style={{color:"white" ,weight:"bold"}} to="/Technology">Technology</Link></li>
        <li><Link className="nav-link" style={{color:"white" ,weight:"bold"}} to="/Entertainment">Entertainment</Link></li>



      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}
