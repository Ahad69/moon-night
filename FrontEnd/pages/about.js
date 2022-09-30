import Head from "next/head";
import Link from "next/link";
import React from "react";
import Countup from "./components/countUp";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
      </Head>
      <Navbar></Navbar>
      <div>
        <div className="about-banner">
          <p className="text-6xl text-white">About Us</p>
        </div>
        <div className="whatwedo">
          <div className="what-we-do">
            <h1 className="text-3xl font-bold">What we do/Who we are</h1>
            <br />
            <p className="mr-10">
              <span className="font-bold">TEXIMCO (BD) LTD</span>. is a first
              growing one of the reputed and well established Export oriented
              Garments Manufacturer, Exporter & Sourcing Company located in the
              famous area at Uttara Model Town, Dhaka, Bangladesh Since 2009.{" "}
              <span className="font-bold">TEXIMCO (BD) LTD</span>. is a
              reregistered Company of Joint Stock Company & Firms, Gov’t
              Republic of Bangladesh. We are a Registered Member of{" "}
              <span className="font-bold">
                “Bangladesh Garments Manufacturer & Exporter Association (BGMEA)
                # AM-1087” & Our Export registration #RA-0148101.
              </span>
              <br />
              <span className="font-bold">
                We have own knit Garments Manufacturing unit in Narayangonj,
                Bscic Area covrering 12 Production Line.
              </span>
              <br />
              Our entire operation is performed by experienced staffs with their
              utmost dedication where customer’s satisfaction is guaranteed.
              With our complete effort and understanding the core concepts of
              this industry we have successfully established ourselves as the
              supplier among a number of companies.
            </p>
          </div>
          <div className="what-we-image">
            <img src="aboutbg.png" alt="" />
          </div>
        </div>
        <p className="what-do-bottom">
          In order to offer you our best & competive price, all we need to know
          your specifications and purchase quantity. We keep the cost base low
          by offering the most workable selling price. That’s why we are looking
          for Prospective Buyers like you on a long term business relationship
          and for expansion of business to your renowned company. So we would
          like take this opportunity to invitet you to visit us and see our
          facilities in Bangladesh, talk to us of our vision and learn more of
          us through discussion, direct trade and Bank references.
          <br />
          <br />
          <span className="font-bold">The reason behind to choose us as a supplier:</span>
          <br />
           We offer you the best <br />
          competitve prices. <br /> Committed with quality. <br /> Always serve you the best
          delivery date. <br /> Take the load that we can absorb. <br /> TEXIMCO is one of the
          leading fast growing reputed & well established 100% oriented ready
          made Garments Manufacturer, Exporter & sourcing Company From dhaka,
          bangladesh. We are very interested to start business with you & want
          to extend our business in your country. We have capacity to supply you
          all sort of Garments Production from bangladesh with very competitive
          prices, best Quality & on time delivery also. Fashion, promotion! &
          Advertising T-shirt, Polo shirt, Tang top, leggings, Sweatshirt,
          Hoodies, Trouser, Sweater, pullover, Cardigan, vest, jeans pant,
          Shirt, Shorts, cargo pant, Hoody jacket, Outerwear jacket, Windbreaker
          jacket, Work wear dress, Casual shirt, Formal shirt, Chino pant, Hot
          pant Underwear for men’s, Cap, Twoels ladies & Children’s to use local
          and imported fabrics/materials.
        </p>

        <Countup></Countup>
        <div className="management">
          <h1 className="text-4xl text-center mt-10 mb-10">Our Management</h1>
          <div className="employees">


          <div className="employee" data-aos="fade-up">
          <div className="image">
            <img
              src="Mijanur.png"
              alt=""
            />
          </div>
          <div className="card-content">
            <div className="wrapper">
            <img
            className="small-image"
            src="Mijanur.png"
              alt=""
            />
              <p className="management-content">
               <br /> Name: Mohammad Mijanur Rahman
                <br />
                Position: Managing Director
                <br />
                E-mail:{" "}
                <a href="mailto:mijan@teximcobd.com ">
                  mijan@teximcobd.com{" "}
                </a>/{" "}
                <a href="mailto:mijan.teximco4@gmail.com">
                  mijan.teximco4@gmail.com
                </a>
                <br />
                Contact Number: <a href="tel:+8801914682466">+88 01914682466</a>
                <br />
                Skype: mijan.dhk, WeChat: TEXIMCO
                </p>
            </div>
          </div>
        </div>


          <div className="employee" data-aos="fade-up">
          <div className="image">
            <img
                 src="farjana.jpeg"
              alt=""
            />
          </div>
          <div className="card-content">
            <div className="wrapper">
            <img
            className="small-image"
            src="farjana.jpeg"
              alt=""
            />
           <p>
               <br /> Name : Farjana Akter <br />
                Position: Chairman
                <br />
                E-mail:{" "}
                <a href="mailto:farjana@teximcobd.com">farjana@teximcobd.com</a>
                <br />
                </p>
            </div>
          </div>
        </div>

          <div className="employee" data-aos="fade-up">
          <div className="image">
            <img
              src="number.png"
              alt=""
            />
          </div>
          <div className="card-content">
            <div className="wrapper">
            <img
            className="small-image"
            src="number.png"
              alt=""
            />
                <p>
                <br /> Md. Mostafa Kamal <br />
                Position: Director( Marketing & Merchandising) <br />
                E-mail:{" "}
                <a href="mailto:info@teximcobd.com">info@teximcobd.com</a>{" "}
                <br />
              </p>
            </div>
          </div>
        </div>

          <div className="employee" data-aos="fade-up">
          <div className="image">
            <img
               src="number.png"
              alt=""
            />
          </div>
          <div className="card-content">
            <div className="wrapper">
            <img
            className="small-image"
            src="number.png"
              alt=""
            />
            
            <p>
              <br /> Garavy chen <br />
                Position: Director(International Marketing) <br />
                E-mail:{" "}
                <a href="mailto:info@teximcobd.com">info@teximcobd.com</a>
              </p>
            </div>
          </div>
        </div>

          <div className="employee" data-aos="fade-up">
          <div className="image">
            <img
             src="number.png"
              alt=""
            />
          </div>
          <div className="card-content">
            <div className="wrapper">
            <img
            className="small-image"
            src="number.png"
              alt=""
            />
                <p>
              <br /> Md. Mozibul Haque <br />
                Position: Director(International Marketing)
                <br />
                E-mail:{" "}
                <a href="mailto:info@teximcobd.com">info@teximcobd.com</a>
              </p>
            </div>
          </div>
        </div>

          </div>
        </div>
        
        <h1 className="text-4xl text-center mt-20 mb-5">About Company</h1>
        <div className="table">
          <p className="styled-row">Company Name</p>
          <p className="text-3xl styled-row">TEXIMCO (BD) LTD.</p>

          <p>Registered & Corporate office Address</p>
          <p className="">
            House # 72, Road # 15, Sector # 11 <br />
            Uttara Model Town, Dhaka-1230, Bangladesh. <br />
            Email: info@teximcobd.com <br />
            Contact # +88 01818652764, +88 01914682466 (WhatsApp) <br />
          </p>
          <p className="styled-row">Established Year</p>
          <p className="styled-row">2009</p>
          <p>Contact Person</p>
          <p>
            Md. Mijanur Rahman (Managing Director) <br />
            Email: mijan@teximcobd.com
          </p>
          <p className="styled-row">Turnover</p>
          <p className="styled-row">US $ 30 Millions</p>

          <p>Bank Details</p>
          <p className="flex justify-between items-center pr-10 bank">
            <>
              01, 02. NRB Commercial Bank Limited <br />
              AB Bank Limited, Uttara Branch
              <br />
              Uttara Branch
              <br />
              Uttara Model Town Dhaka-1230,
              <br />
              Bangladesh. *<br />
              House # 11, Road #14/D
              <br />
              A/C Name: TEXIMCO(BD) LTD.
              <br />
              A/C No;: 4020-789027-000
              <br />
              Swift Number: ABBLBDDH020
              <br />
            </>
            <hr className="table-hr" />
            <>
              01, 02. NRB Commercial Bank Limited <br />
              AB Bank Limited, Uttara Branch
              <br />
              Uttara Branch
              <br />
              Uttara Model Town Dhaka-1230,
              <br />
              Bangladesh. *<br />
              House # 11, Road #14/D
              <br />
              A/C Name: TEXIMCO(BD) LTD.
              <br />
              A/C No;: 4020-789027-000
              <br />
              Swift Number: ABBLBDDH020
              <br />
            </>
          </p>
          <p className="styled-row">No. of Employees</p>
          <p className="styled-row">
            15 Persons, <br />
            Merchandising — 04 Persons <br />
            Quality Assurance : 08 Persons <br />
            Commercial: 01 Person <br />
            Accountant: 01 Person <br />
            Office Executive: 01 Person
          </p>
          <p>Products Line</p>
          <p>
            Knit, Sweaters, Woven, Jeans, Sportswear, Activewear, Work wear,
            Terry Towel, Cap-Hats Fashion, Promotional & Advertising Products
            for Men’s, Ladies & Children’s.
          </p>
          <p className="styled-row">Major Export Country</p>
          <p className="styled-row">
            USA, CANADA, POLAND, ITALY, SPAIN, GERMANY, UK, UAE, MEXICO, BRAZIL,
            CHINA, FINLAND.
          </p>
          <p>Mode of Payment</p>
          <p>
            100% Irrevocable / transferable LC at sight, Wire transfer (TT) 30
            days Deferred
          </p>
          <p className="styled-row">Mode of Delivery</p>
          <p className="styled-row">FOB, CNF, CIF.</p>
          <p>Shipment Lead Time</p>
          <p>
            45-90 days for local Fabrics & Accessories, 90-120 days for imported
            fab and accessories.
          </p>
          <p className="styled-row">Nature of Business</p>
          <p className="styled-row">
            100% export oriented- Apparel/Clothing Exporter, Buying and Sourcing
            company
          </p>
          <p>Social Ethics</p>
          <p>
            Our enlisted factories are cerified by BSCI, SEDEX, WRAP, ILO, ISO,
            Oeko-Tex, GOTS, Accord & Alliance.
          </p>
          <p className="styled-row">Website</p>
          <p className="styled-row">
            {" "}
            <Link href="/">http://www.teximcobd.com</Link>
          </p>
        </div>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
