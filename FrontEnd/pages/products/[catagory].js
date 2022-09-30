import React, { useEffect } from "react";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade , Navigation, Pagination} from "swiper";

const Catagory = () => {

  const router = useRouter();
  const catagory = router.query.catagory;
  const [loading, setLoaduing] = useState(false)
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    setLoaduing(true)
    fetch("http://localhost:5000/teximco/products/")
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data.data?.products)
        setLoaduing(false)
      });
  }, []);



  const photoByCatagory = photo?.filter((photo) => photo?.category == catagory);
  const latestCategory = photoByCatagory?.reverse();



  return (
    <div>
      <Head>
        <title>{catagory}</title>
      </Head>
      <Navbar></Navbar>
      <h1 className="text-center text-6xl">{catagory}</h1>

      <div className="gallery">
        {latestCategory?.map((photos) => (
          <div className="product" key={photos?._id}>
            <label htmlFor={photos?._id} className="label">
              <img src={photos?.imgS} alt="" />
            </label>

            <input type="checkbox" id={photos?._id} className="modal-toggle" />
            <div className="modal modal-div">
              <div className="modal-box relative modal-boxs  w-6/12 max-w-5xl">
                <label
                  htmlFor={photos?._id}
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <Swiper
          spaceBetween={30}
          
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
         
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Autoplay , Navigation, Pagination]}
          className="mySwiper"
          rewind={true}
        >
          <SwiperSlide>
            <div className="product-image">
                <img src={photos?.imgF} alt="" />
                <h3 className="text-lg font-bold">{photos?.name}</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product-image">
                <img src={photos?.imgS} alt="" />
                <h3 className="text-lg font-bold">{photos?.name}</h3>
            </div>
          </SwiperSlide>
        </Swiper>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
