import React from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const WhoWeAre = () => {
  return (
    <>
       <Head>
        <title>Who We Are</title>
      </Head>
      <Navbar></Navbar>
    <div className="who-we-container">
   
      <div className="whatwedo">
        <div className="what-we-do">
          <h1 className="text-3xl font-bold">Who We Are</h1>
          <br />
          <p className="mr-10">
            <span className="">TEXIMCO (BD) LTD</span>. is a first
            growing one of the reputed and well established Export oriented
            Garments Manufacturer, Exporter & Sourcing Company located in the
            famous area at Uttara Model Town, Dhaka, Bangladesh Since 2009.{" "}
            <span className="">TEXIMCO (BD) LTD</span>. is a
            reregistered Company of Joint Stock Company & Firms, Gov’t Republic
            of Bangladesh. We are a Registered Member of{" "}
            <span className="">
              “Bangladesh Garments Manufacturer & Exporter Association (BGMEA) #
              AM-1549” & Our Export registration #RA-0148101.
            </span>
            <br />
            <span className="font-bold">
              We have own knit Garments Manufacturing unit in Narayangonj, Bscic
              Area covrering 12 Production Line.
            </span>
            <br />
          </p>
        </div>
        <div className="what-we-image">
          <img src="/who-we-are.jpeg" alt="" />
        </div>
      </div>
      <p className="what-do-bottom">
        We have capacity to supply you all sort of Garments Production from
        bangladesh with very competitive prices, best Quality & on time delivery
        also. Fashion, promotion! & Advertising T-shirt, Polo shirt, Tank top,
        leggings, Sweatshirt, Hoodies, Trouser, Sweater, Pullover, Cardigan,
        Vest, Jeans pant, Shirt, Shorts, Cargo pant, Hoody jacket, Outerwear
        jacket, Windbreaker jacket, Work wear dress, Casual shirt, Formal shirt,
        Chino pant, Hot pant Underwear for men’s, Cap, Towels ladies &
        Children’s to use local and imported fabrics/materials. <br />
        In order to offer you our best & competitive price, all we need to know
        your specifications and purchase quantity. We keep the cost base low by
        offering the most workable selling price. That’s why we are looking for
        Prospective Buyers like you on a long term business relationship and for
        expansion of business to your renowned company. So we would like to take
        this opportunity to invite you to visit us and see our facilities in
        Bangladesh, talk to us of our vision and learn more of us through
        discussion, direct trade and Bank references.
        <br />
        <br />
        <span className="font-bold">
          The reason behind to choose us as a supplier:
        </span>
        <br />
        We offer you the best. competitive prices. Committed with quality. Always
        serve you the best delivery date.Take the load that we can absorb.
      </p>
     
    </div>
    <Footer></Footer>
    </>
  
  );
};

export default WhoWeAre;
