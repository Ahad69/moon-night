import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Image from 'next/image'

import image from "../../public/compa.jpg"
import Link from "next/link";

const Comparison = ({portrait}) => {
  return (
    <div className="comparison-container">
      <div className="comparison-content">
          <span className="text-center">
          <h1 className="text-6xl">This Season</h1>
          <br />
          <h6>Be Ready To Change</h6>
          <br />
          <br />
          <button className="shop-button"> <Link href='/contact'> Contact Us </Link></button>
          </span>
        
      </div>
      <div className="comparison-image">
        <ReactCompareSlider
         portrait={portrait}
         handle={
           <div style={{ display: 'grid', placeContent: 'center', height: '100%' }}>
             <button
               style={{
                 all: 'unset',
                 fontSize: 56,
                 borderRadius: '50%',
               }}
             >
               {portrait ? '🥰' : <img style={{borderRadius : ' 20%' , border : '1px solid white'}} width={40} src="/compa.jpg" alt="" />}
             </button>
           </div>
         }
          itemOne={
            <ReactCompareSliderImage
              src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1784&q=70"
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="https://images.unsplash.com/photo-1437809781432-a957377661ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1784&q=70"
              alt="Image two"
              style={{ transform: "scale(1.125)" }}
            />
          }
          style={{ width: "100%", height: "50vh" }}
        />
      </div>
    </div>
  );
};

export default Comparison;
