import React from "react";
import { Link } from "react-router-dom";
const Header = ({auth}) => {
  const handleclick=()=>{
    localStorage.removeItem('token')
  }
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {auth? (
              <>
                <Link className="nav-item nav-link" to="/product">
                  Products
                </Link>
                <Link className="nav-item nav-link" to="/families">
                  Families
                </Link>
                <Link className="nav-item nav-link" to="/locations">
                  Locations
                </Link>
                <Link className="nav-item nav-link" to="/transaction">
                  Transaction
                </Link>
                <button className="bg-danger btn btn-success text-white ml-5" onClick={handleclick}>Logout</button>
              </>
            ) : (
              <>
                <Link className="nav-item nav-link active" to="/">
                  Home
                </Link>
                <Link className="nav-item nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-item nav-link" to="/signup">
                  Signup
                </Link>
              </>
            )}
          </div>
          {/* <button className="bg-danger btn text-white">Logged as {" "} {a.email}</button> */}
      
        </div>
      </nav>
    </div>
  );
};

export default Header;
