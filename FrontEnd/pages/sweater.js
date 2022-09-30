import Head from 'next/head';
import React from 'react';
import Galleries from './components/gallery';

const Sweater = ({title = 'Sweater'}) => {
    return (
       <div>
         <Head>
         <title>{title}</title>
        </Head>
        <div>
           <Galleries></Galleries>
        </div>
       </div>
    );
};

export default Sweater;