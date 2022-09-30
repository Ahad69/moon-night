import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const CompanyProfile = () => {
    return (
        <>
        <Head>
                <title>Company Profile</title>
            </Head>
            <Navbar></Navbar>
            <div className='company-profile-container'>
            <img className='company-image' src="/company.jpeg" alt="" />
             <h1 className="text-4xl text-center mt-20 mb-5">Company Profile</h1>
        <div className="company-table">
          <p className="styled-row">Company Name</p>
          <p className="text-3xl styled-row">TEXIMCO (BD) LTD.</p>

          <p>Registered & Corporate office Address</p>
          <p className="">
            House # 72(1st & 2nd Floor), Road # 15, Sector # 11 <br />
            Uttara Model Town, Dhaka-1230, Bangladesh. <br />
            Email: info@teximcobd.com <br />
            Contact # +88 01818652764 <br />
          </p>
          <p className="styled-row">Established Year</p>
          <p className="styled-row">2009</p>
          <p>Contact Person</p>
          <p>
            Mohammad Mijanur Rahman (Managing Director) <br />
            Email: mijan@teximcobd.com
          </p>
          <p className="styled-row">Turnover</p>
          <p className="styled-row">US $ 30 Millions</p>

          <p>Our Bank Details</p>
          <div className="flex justify-center items-center text-2xl  bank">
            <span className='table-first-column'>
              AB Bank Limited <br />
      
       
              Uttara Branch
              <br />
              House # 11, Road #14/D
              <br />
              Uttara Model Town Dhaka-1230,
              <br />
              Bangladesh. <br />
              
            
              A/C Name: TEXIMCO(BD) LTD.
              <br />
              A/C No;: 4020-789027-000
              <br />
              Swift Number: ABBLBDDH020
              <br />
            </span>
            <hr className="table-hr" />
            <span className='table-last-column'>
              NRB Commercial Bank Limited <br />
     
    
              Uttara Branch
              <br />
              House # 13, Road # 15
              Sector # 03 <br />
              Uttara Model Town, Dhaka 1230
              <br />
              Bangladesh.
              <br />
              A/C Name: TEXIMCO(BD) LTD.
              <br />
              A/C No. : 010833300000849
              <br />
          Swift Number : NARBBBDDHUTR
              <br />
            </span>
          </div>
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
            fabrics and accessories.
          </p>
          <p className="styled-row">Nature of Business</p>
          <p className="styled-row">
          100% Export Oriented Readymade Garments Manufacturer, Exporter, Buying and Sourcing
          </p>
          <p>Social Ethics</p>
          <p>
            Our enlisted factories are cerified by BSCI, SEDEX, WRAP, ILO, ISO,
            Oeko-Tex, GOTS, Accord & Alliance.
          </p>
          <p className="styled-row">Members of</p>
          <p className="styled-row">
          DNCC: 20117, BGMEA: AM - 1549, DOT: I - 1153, ERC: RA - 0148101
          </p>
        </div>
            </div>
        <Footer></Footer>
        </>
    );
};

export default CompanyProfile;
