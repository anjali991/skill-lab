//  import React from "react";
//  import "bootstrap/dist/css/bootstrap.min.css";
//  import { Link } from "react-router-dom";

//  const NavBar=()=>{
//     return(
//         <>
//         <nav className="navbar navbar-expand-Ig bg-dark
//         navbar-dark">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">
//                     Navbar
//                 </Link>
//                 <div className="collapse navbar-collapse">
//                     <ul className="navbar-nav me-auto">
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/">

//                      Home

//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link" to="/contact">
//                                 contact
//                                 </Link>
//                         </li>
//                         <li className="nameClass="nav-link" to="/about">
                        
                    
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//         </>
//     )
//  }


import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
         
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
