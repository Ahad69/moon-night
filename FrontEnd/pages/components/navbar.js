import Link from "next/link";
import React from "react";
import { useState } from 'react'

const Navbar = () => {
  const [sticky , setSticky] = useState(false)

  global.onscroll = ()=>{
    scrollY > 20 ? setSticky(true) : setSticky(false);
  }
  
  return (
    <div className="navbar"  style={{ background : sticky ? "black" : "white"  , paddingTop : sticky ? '40px' : '70px'}}>
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <img  src="https://i.ibb.co/SxWy7DG/menu.png" alt="" />
        </label>
        <div className="content">
          <div className="logo">
            <a href="#">
              <img
                src="/Teximco.png"
                alt=""

              />
              <span>
              <h1 className="text-white text-5xl inline" style={{ color : sticky ? "white" : "black" }}>TEXIMCO (BD) LTD</h1>
              <p  className="text-white text-xs" style={{ color : sticky ? "white" : "black" }}>Apparel Manufacturer, Expoert, Buying & Sourcing Company</p>
              </span>
            </a>

          </div>
       

          <ul className="links" style={{ background : sticky ? "black" : "white" }} >
            <li style={{color  : sticky ? "white" : "black"}}>
              <Link href="/">Home</Link>
            </li>
            <li style={{color  : sticky ? "white" : "black"}}>
              <a href="#" className="desktop-link"  style={{color  : sticky ? "white" : "black"}}>
                About Us
              </a>
              <input type="checkbox" id="show-features" />
              <label htmlFor="show-features"  style={{color  : sticky ? "white" : "black"}}>About Us</label>
              <ul style={{background  : sticky ? "black" : "white" , }}>
                <li>
                  <Link href="/company/who-we-are">Who We Are</Link>
                </li>
                <li>
                  <Link href="/company/product-range">Product Range</Link>
                </li>
                <li>
                  <Link href="/company/how-we-work">How We Work</Link>
                </li>
                <li>
                  <Link href="/company/company-profile">Company Profile</Link>
                </li>
              </ul>
            </li>
            <li style={{color  : sticky ? "white" : "black"}}>
              <a href="#" className="desktop-link"  style={{color  : sticky ? "white" : "black"}}>
                Products
              </a>
              <input type="checkbox" id="show-features" />
              <label htmlFor="show-features"  style={{color  : sticky ? "white" : "black"}}>Products</label>
              <ul style={{background  : sticky ? "black" : "white" , }}>
                <li>
                  <Link href="/products/Knitwear">Knitwear</Link>
                </li>
                <li>
                  <Link href="/products/Jeanswear">Jeanswear</Link>
                </li>
                <li>
                  <Link href="/products/Sweater">Sweater</Link>
                </li>
                <li>
                  <Link href="/products/Outerwear">Outerwear</Link>
                </li>
              
                <li>
                  <Link href="/products/Bags-and-Towels">Bags and Towels</Link>
                </li>
                <li>
                  <Link href="/products/Hades-and-Caps">Hades and Caps</Link>
                </li>
              </ul>
            </li>
           
            <li style={{color  : sticky ? "white" : "black"}}>
              <Link href="/vendors-and-partners"  style={{color  : sticky ? "white" : "black"}}>Vendor and Partner</Link>
            </li>
            <li style={{color  : sticky ? "white" : "black"}}>
              <Link href="/media">Media</Link>
            </li>
            <li style={{color  : sticky ? "white" : "black"}}>
              <Link href="/contact">Contact</Link>
            </li>
            
          </ul>
        </div>
      
      </nav>
    </div>
  );
};

export default Navbar;
