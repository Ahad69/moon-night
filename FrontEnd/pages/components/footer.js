import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 mt-24  text-base-content border-t  border-base-300">
        <div>
          <span className="footer-title">Products</span>
          <Link href="/products/Knitwear" className="link link-hover">
            Knitwear
          </Link>
          <Link href="/products/Jeanswear" className="link link-hover">
            Jeanswear
          </Link>
          <Link href="/products/Sweater" className="link link-hover">
            Sweater
          </Link>
          <Link href="/products/Outerwear" className="link link-hover">
            Outerwear
          </Link>
          <Link href="/products/Bags-and-Towels" className="link link-hover">
            Bags/Towels
          </Link>
          <Link href="/products/Hades-and-Caps" className="link link-hover">
            Hades/Caps
          </Link>
        </div>
        <div>
          <span className="footer-title">About Us</span>
          <Link href="/products/who-we-are" className="link link-hover">
            Who We Are
          </Link>
          <Link href="/products/product-range" className="link link-hover">
            Product Range
          </Link>
          <Link href="/products/how-we-work" className="link link-hover">
            How We Work
          </Link>
          <Link href="/products/company-profile" className="link link-hover">
            Company Profile
          </Link>
        </div>
        <div>
          <div className="footer-logo">
            <img src="/Teximco.png" alt="" />
            <span>
              {" "}
              <h1 className=" text-4xl inline ml-2">TEXIMCO (BD) LTD</h1>
              <br />
              <p className="text-xs ml-2">
                Apparel Manufacturer, Expoert, Buying & Sourcing Company
              </p>
            </span>
          </div>
       <br />
          <h1 className="text-center privacy">Copyright Ⓒ 2022</h1>
          <br />
          <br />
        <div  className="privacy">
        <h1>Design and Developed by : <a className="underline text-blue-400 font-bold" href="https://erevolute.com">eRevolute</a></h1>
        </div>
        
        </div>
      </footer>
    </div>
  );
};

export default Footer;
