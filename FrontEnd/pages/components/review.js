import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade , Navigation, Pagination} from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const Review = () => {
  return (
    <div className="review-container mt-40">
        <div className="review-slider">
        <Swiper
          spaceBetween={30}
          
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay , Navigation, Pagination]}
          className="mySwiper"
          rewind={true}
        >
          <SwiperSlide>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4yUuRbFJYySlDnMDOh3CKWKHHpIC-5cIhZA&usqp=CAU" alt="" />
                <br />
                <h1 className="text-3xl bg-white">Ema Watson</h1><br />
                <p className="reviewText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate quam ut mi </p>
                <br />
                <div className="flex justify-center">
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
                <img src="https://media.gettyimages.com/photos/positive-and-professional-everything-you-want-in-an-entrepreneur-picture-id981749414?s=612x612" alt="" />
                <br />
                <h1 className="text-3xl bg-white">Tom Brandon</h1><br />
                <p className="reviewText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate quam ut mi dictum,</p>
                <br />
                <div className="flex justify-center">
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                <FontAwesomeIcon className=" star" icon={faStar} />
                </div>
               
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
                <img src="https://image.shutterstock.com/image-photo/portrait-happy-mid-adult-man-260nw-1812937819.jpg" alt="" />
                <br />
                <h1 className="text-3xl bg-white">Robert Pattinson</h1><br />
                <p className="reviewText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate quam ut mi ds</p>
                <br />
                <div className="flex justify-center">
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                <FontAwesomeIcon className="text-orange-600 star" icon={faStar} />
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-black border border-white outline-white hover:bg-white hover:text-black  p-5 rounded-full text-white font-bold">Reviews</div>
    </div>
  );
};

export default Review;
