import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';

const HomeMedia = () => {
  


    return (
        <div className='homemedia-container mt-40'>
            <div className="homemedia-content">
                <h1 className='text-5xl text-gray-400'> Mr. Mohammad Mijanur Rahman </h1>
                <br />
                <h1 className='text-4xl font-bold'>A Visionary Entrepreneurs Managing Director of TEXIMCO (BD) LTD. 
                </h1>
               
            
                 <br />
                <br />
                <button className="shop-button2"> <Link href="/media">Find Out Now</Link> </button>
            </div>
            <div className="homemedia-image">
                <img className='rounded-full' src="mijan01.jpeg" alt="" />
            </div>
        </div>
    );
};

export default HomeMedia;