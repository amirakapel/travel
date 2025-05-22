import React from 'react'
import { Link } from 'react-router'
import { CartProvider} from 'react-use-cart'
import { useEffect } from "react";


function Nav() {
    
  useEffect(() => {
    function funscroll() {
      var nav = document.querySelector(".navbar");
      var scrolll = window.scrollY;
      if (scrolll < 200) {
        nav.classList.remove("navscroll");
      } else {
        nav.classList.add("navscroll");
      }
    }
    window.addEventListener("scroll", funscroll);
    return () => window.removeEventListener("scroll", funscroll);
  }, []);

  return (
    <CartProvider>
                      {/* <!-- //////////////////////////////START NAVBAR /////////////////////// --> */}
<div className="container-fluid">
    <div className="row">
        <div className="col-md-12">
            <nav className=" navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/Home">Travel</Link>
                <ul className="navbar-nav_darkMode mt-2">
                      <li className="nav-item_darkMode ">
                      <button id="white_8" ><i className="fa-solid fa-moon"></i></button>
                    </li>
                      <li className="nav-item_darkMode ">
                      <button id="lightMode_buttun"><i className="fa-solid fa-sun"></i></button>
                    </li>
                </ul>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto pl-2">
                    <li className="nav-item ">
                      <Link className="nav-link " id="white_1" to="/Home">Home</Link>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link " smooth={true} offset={50}  duration={500}  id="white_2" href="#Services_click">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " id="white_3" href="#About_click">About</a>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" id="white_4" to="/destination">destination</Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="white_5" href="#Hotel_click">Hotel</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="white_6" href="#Resturant_click">Resturant</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="white_7" href="#Contact_click">Contact</a>
                    </li>
                      <li className="nav-item">
                      <Link className="nav-link" id="white_4" to="/cart"><i className="fas fa-shopping-cart"></i> </Link>
                    </li>
                  </ul>
                </div>
              </nav>
        </div>
    </div>
</div>
    </CartProvider>
  )
}

export default Nav