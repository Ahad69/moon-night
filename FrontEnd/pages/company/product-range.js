import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Head from "next/head"
import 'react-vertical-timeline-component/style.min.css';

const ProductRange = () => {
    return (
  <>
        <div className='product-range-container'>
            <Head>
            <title>Our Product Range</title>
            </Head>
            <Navbar></Navbar>
            <h1 className='text-center text-5xl mt-5 mb-5'>Product Range</h1>
            <img className="product-range" src="/product-range.jpeg" alt="" />
            <p className='container product-range-p pt-5'>
            <strong>Circular Knit:</strong> T-shirt, Polo shirt, Tank top, Nightwear, Sports wear, Security wear, Vest, Fleece Jacket,
            Hooded Jacket, Leggings, Underwear, Made of Local & Imported fabrics for Men’s, Women’s & Children’s.
            <br />
            <br />
           <strong> Sweater, Pullover, Cardigan & Vest: (3, 5, 7, 10 & 12 Gauge) Made of:</strong> Acrylic, Cotton, 
            Acrylic/Cotton, Acrylic/Wool, Cotton Like, Acrylic Cashmere like, Acrylic Mohair Like/Tamu, 
            Cotton/Nylon, Acrylic/Nylon, Acrylic Bright, Chenille, Tube, Tape & few more basic blended Local & 
       
            Imported yarns for Men’s, Ladies, Boy’s, Girls & Kids. <br />
            <br />
            <strong>Woven, Denim & Non-Denim:</strong> Jeans Pant, Jacket (Basic/Fancy), Trouser, Chino, shorts, Cargo Pants,
            Shirt (Casual & Formal), Tailored pant, Blazer, Men’s, Ladies, Boy’s, Girls & Kids Top-bottom made of: Local 
            & Imported denim & non-denim fabric. <br />
            <br />
            <br />
            <strong>Bags and Towels :</strong> description will be added soon...
            <br />
            <br />
            <strong>Hades and Caps :</strong> Baseball cap, Sun Cap, Sun visor, Bucket cap, Flat Cap, Cowboy hat , Beanie, Knit cap etc.
            <br />
            <br />
            We are providing professional guidance in out-sourcing of ready-made garment production in the most 
            competitive markets in Asia. We have more than 25 out sourcing factories incl. (knit, woven, sweaters and
            outerwear) in Bangladesh, which is absolutely high profile factories at around. To ensure customer 
            satisfaction, we work on followed from the time of developing samples until the ready-made garment is  
            loaded into the container.
            </p>
            
        </div>
        <Footer></Footer>
        </>
    );
};

export default ProductRange;
