import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import ReactHtmlParser from 'react-html-parser';

const MediaDetails = () => {
    const router = useRouter();
    const id = router.query.id;

    const [medias , setMedias] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("http://localhost:5000/teximco/media")
          .then((res) => res.json())
          .then((data) => {
            setMedias(data.data?.medias);
            setIsLoading(false);
          });
      }, []);
    
    const find = medias.find(media => media._id == id)
 


  
    return (
        <div>
            <Head>
                <title>Media Details</title>
            </Head>
            <Navbar></Navbar>
            <div><div className='media-container'>
                <div className="media-subject">
                    <h1 className='text-2xl text-gray-400'>Name : {find?.name} </h1>
                    <h1 className='uppercase  text-6xl media-title font-bold'>{find?.subject}</h1>
                </div>
                <div className="media-image">


                    {
                        find?.type == 'image' && <img src={find?.image} className="mediaImageSingle" alt="" />  
                    }
                    {
                        find?.type == 'video' && <iframe width="660" height="415" src={find?.videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    }
                   
                </div>
            </div>
            <div className="media-content pt-10 ml-12">
                <h1>Date : {find?.createdAt} <span className='bg-gray-200 p-1'>{find?.name}  </span></h1>
                <br />
                <span>{ReactHtmlParser(find?.description)}</span>
            </div></div>
            
        </div>
    );
};

export default MediaDetails;