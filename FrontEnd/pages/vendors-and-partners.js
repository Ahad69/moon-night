import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import React from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const FactoryProfile = () => {
  return (
    <div>
      <Head>
        <title>Factory Profile</title>
      </Head>
      <Navbar></Navbar>
      <div>
        <h1 className=" mt-10 text-4xl font-bold mb-10 ml-10">Our key Vendor and Partners</h1>
        <div className="sections-factory">
          <div className="factory-image">
            <img src="Screenshot_7.png" alt="" />
          </div>
          <div className="factory-content ml-10">
            <h1 className="font-bold">Tara Tex Fashion</h1>
            <p>
              Yearly Turn Over USD 22 0 Million <br />
              Product Category: Knit’s Garments
              <br />
              Production Capacity: 2.5 Million (Monthly)
              <br />
              Number of Machines- 1,350 Pcs
              <br />
              Manpower: 3,000 Person
              <br />
              Complinace Certificats: Accord, BSCI, WRAP, SEDEX
            </p>
          </div>
        </div>
        <hr className="m-10 bookends" />
        <div className="sections-factory">
          <div className="factory-content text-right md:mr-10">
            <h1 className="font-bold">Devor Sweater</h1>
            <p>
              Yearly Turn Over USD 20 Million <br />
              Product Category: Sweater, Pullover,Vest Etc. <br />
              Production Capacity: 10,00 00 (Monthly) <br />
              Number of Machines- 450 Pcs <br />
              Manpower: 600 Person <br />
              Complinace Certificats: ILO, BSC, WRAP,SEDEX <br />
            </p>
          </div>
          <div className="factory-image">
            <img src="Screenshot8.png" alt="" />
          </div>
        </div>
        <hr className="m-10 bookends" />
        <div className="sections-factory">
          <div className="factory-image">
            <img src="Screenshot_1.png" alt="" />
          </div>
          <div className="factory-content ml-10">
            <h1 className="font-bold">KAC Fashion Ltd.</h1>
            <p>
              Yearly Turn Over USD 22.5 Million <br />
              Product Category: Knit’s Garments <br />
              Production Capacity: 22.5 Millions (Monthly) <br />
              Number of Machines- 750 Pcs <br />
              Manpower:1,200 Person <br />
              Complinace Certificats: Accord, BSCI, WRAP,SEDEX <br />
            </p>
          </div>
        </div>
        <hr className="m-10 bookends" />
        <div className="sections-factory">
          <div className="factory-content text-right md:mr-10">
            <h1 className="font-bold">Uttara Knit Wear</h1>
            <p>
              Yearly Turn Over USD 60 Million<br />
              Product Category: Knit 3 Woven
              <br />
              Production Capacity: 1.5 Millions Pcs
              <br />
              Number of Machines- 750 Pcs
              <br />
              Manpower: 1,050 Person
              <br />
              Complinace Certificats: Accord, BSCI, WRAP,SEDEX
              <br />
            </p>
          </div>
          <div className="factory-image">
            <img src="Screenshot_2.png" alt="" />
          </div>
        </div>
        <hr className="m-10 bookends" />
        <div className="sections-factory">
          <div className="factory-image">
            <img src="Screenshot5.png" alt="" />
          </div>
          <div className="factory-content ml-10">
            <h1 className="font-bold">MT Sweater Ltd.</h1>
            <p>
              Yearly Turn Over USD: 30 Million <br />
              Product Category: Sweater, Pullover, Cardigan
              <br />
              Production Capacity: 4,00,000 Pcs
              <br />
              Number of Machines- 950 Pcs
              <br />
              Manpower: 2,500 Person
              <br />
              Complinace Certificats: BSCI, WRAP,SEDEX, ISO, RSC
              <br />
            </p>
          </div>
        </div>
        <hr className="m-10 bookends" />
        <div className="sections-factory">
          <div className="factory-content text-right md:mr-10">
            <h1 className="font-bold"> Automation Knit Wear Ltd.</h1>
            <p>
              Yearly Turn Over USD 20 Million <br />
              Product Category: Knit’s Garments
              <br />
              Production Line: 12
              <br />
              Number of Machines- 420 Pcs
              <br />
              Manpower: 550 Person
              <br />
              Complinace Certificats: Accord, BSC, WRAP,SEDEX
              <br />
            </p>
          </div>
          <div className="factory-image">
            <img src="Screenshot6.png" alt="" />
          </div>
        </div>
        <hr className="m-10 bookends" />
        <div className="sections-factory">
          <div className="factory-image">
            <img src="Screenshot7.png" alt="" />
          </div>
          <div className="factory-content ml-10">
            <h1 className="font-bold">Mostafa Garments</h1>
            <p>
              Yearly Turn Over USD 2,5 Millions <br />
              Product Category: Jacket, Trouser, Shorts etc.
              <br />
              Production Capacity: 2,00,000 per month
              <br />
              Number of Machines- 550 Pcs
              <br />
              Manpower: 500 Person
              <br />
              Complinace Certificats: ILO, BSCI, WRAP,SEDEX
              <br />
            </p>
          </div>
        </div>
        <hr className="m-10 bookends" />
        <div className="sections-factory">
          <div className="factory-content text-right md:mr-10">
            <h1 className="font-bold">Silken Sewing LTD </h1>
            <p>
            Yearly Turn Over USD 60 Million<br />
              Product Category: Knit 3 Woven
              <br />
              Production Capacity: 1.5 Millions Pcs
              <br />
              Number of Machines- 750 Pcs
              <br />
              Manpower: 1,050 Person
              <br />
              Complinace Certificats: Accord, BSCI, WRAP,SEDEX
              <br />
            </p>
          </div>
          <div className="factory-image">
            <img width={400} src="silken.jpg" alt="" />
          </div>
        </div>
        <hr className="m-10 bookends" />
        <div className="sections-factory">
          <div className="factory-image">
            <img width={400} src="cotton.jpg" alt="" />
          </div>
          <div className="factory-content ml-10">
            <h1 className="font-bold">Cotton Zone Knit Composite LTD</h1>
            <p>
            Yearly Turn Over USD 20 Million <br />
              Product Category: Knit’s Garments
              <br />
              Production Line: 12
              <br />
              Number of Machines- 420 Pcs
              <br />
              Manpower: 550 Person
              <br />
              Complinace Certificats: Accord, BSC, WRAP,SEDEX
              <br />
            </p>
          </div>
        </div>
      </div>

<h1 className="text-3xl text-center mt-48 font-bold">Quality Assurance</h1>
<p className="text-center">Quality Control System</p>
      <div className="timeline2">
  <div className="outer2">

    <div className="timelines2">
      <div className="info2">
        <h3 className="title2">Procurement</h3>
        <div className='timelines-card'>
          <p>Buyer’s approval before production</p>
          <span className='left-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowRight} /></span>
          <span className='bottom-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowDown} /></span>
          <p>Pre Inspection before shipment</p>
          <span className='left-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowRight} /></span>
          <span className='bottom-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowDown} /></span>
          <p>
          In-house inventory
          as per sample
          </p>
        </div>
      </div>
    </div>
    <br />
    <div className="timelines2">
      <div className="info2">
        <h3 className="title2">Pre-Production</h3>
        <div className='timelines-card'>
          <p>
Pattern, Market & Cons.</p>
<span className='left-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowRight} /> </span>
          <span className='bottom-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowDown} /></span>
          <p>
Fabric, Accessories
& swatch approval
</p>
<span className='left-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowRight} /></span>
          <span className='bottom-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowDown} /></span>
          <p>
          Sample size set &
wash approval
          </p>
        </div>
      </div>
    </div>
    <br />
    <div className="timelines2">
      <div className="info2">
        <h3 className="title2">Cutting</h3>
        <div className='timelines-card'>
          <p>
          Fabric inspection</p>
          <span className='left-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowRight} /></span>
          <span className='bottom-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowDown} /></span>
          <p>
          Shade band
</p>
<span className='left-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowRight} /></span>
          <span className='bottom-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowDown} /></span>
          <p>
          Check 100% cutting parts
          </p>
        </div>
      </div>
    </div>
    <br />
    <div className="timelines2">
      <div className="info2">
        <h3 className="title2">Sewing </h3>
        <div className='timelines-card'>
          <p>
          100% Front parts inspection</p>
          <span className='left-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowRight} /></span>
          <span className='bottom-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowDown} /></span>
          <p>
          100% Back parts inspection
</p>
<span className='left-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowRight} /></span>
          <span className='bottom-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowDown} /></span>
          <p>
          Assembling process inspection
          </p>
          <span className='left-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowRight} /></span>
          <span className='bottom-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowDown} /></span>
          <p>
          Final table inspection
          </p>
        </div>
      </div>
    </div>
<br />
    <div className="timelines2">
      <div className="info2">
        <h3 className="title2">Finishing </h3>
        <div className='timelines-card'>
          <p>
          Process inspection</p>
          <span className='left-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowRight} /></span>
          <span className='bottom-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowDown} /></span>
          <p>
         Measurement and Getup
</p>
<span className='left-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowRight} /></span>
          <span className='bottom-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowDown} /></span>
          <p>
          Hourly GMT audit inspection
          </p>
          <span className='left-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowRight} /></span>
          <span className='bottom-arrow'><FontAwesomeIcon className='fs-3 pb-2'  icon={faArrowDown} /></span>
          <p>
          Daily GMT audit inspection
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
<Footer></Footer>
 

    </div>
  );
};

export default FactoryProfile;
