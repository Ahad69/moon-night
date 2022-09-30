import React from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const HowWeWork = () => {
  return (
<>
<div className="how-we-work">
      <Head>
        <title>How We Work</title>
      </Head>
      <Navbar></Navbar>
      <h1 className="mt-10 mb-10 text-5xl text-center">How We Work : </h1>
      <div className="timeline">
        <div className="outer">
          <div className="timelines">
            <div className="info">
              <h3 className="timelines-title text-3xl font-bold mb-5">Inquiry</h3>
              <p>
              Once we receive your product specification
        such as - sketch, design & measurement, fabric construction & color, or
        even reference sample we will discuss the options and procedure. An
        initial costing can be given, inform timing and other factors if any.
           
     
              </p>
            </div>
          </div>
          <div className="timelines">
            <div className="info">
              <h3 className="timelines-title  text-3xl font-bold mb-5">Design Developments</h3>
              <p>
              We develops prototype patterns
        and samples, approval samples and patterns, grading to all requisite
        size ranges and size sets, issues production markers ensuring most
        judicial use of fabrics keeping in mind all technicalities of fabric to
        produce most desirable garments.
              </p>
            </div>
          </div>

          <div className="timelines">
            <div className="info">
              <h3 className="timelines-title  text-3xl font-bold mb-5">Sample Making</h3>
              <p>
              Upon acceptance of initial price we
                develop the samples from our sample section according to the required
                design/samples with available fabrics. This sample will be evaluated by
                the Buyer to examine the design, measurement and workmanship.
              </p>
            </div>
          </div>

          <div className="timelines">
            <div className="info">
              <h3 className="timelines-title  text-3xl font-bold mb-5">Factory Sourcing</h3>
              <p>
              We have own kint Garments
        Manufacturing unti Associated some kint, Woven, Sweater, jeans, Towel,
        Hats & Cap Factories located in Dhaka, Gazipur, Saver, Ashulia,
        Narayangonj & Chattogram Area. We have pre-allocated production space in
        all our factories and hence it’s easy for us to execute all our orders on time. On the spot presence of our technical
        and quality assurance team ensures smooth running of orders and achieve
        right quality in first me, to avoid last moment surprises.
              </p>
            </div>
          </div>

          <div className="timelines">
            <div className="info">
              <h3 className="timelines-title  text-3xl font-bold mb-5"> Production Control </h3>
              <p>
              With experienced and skilled
        on-site quality control teams, we are able to provide our partners with
        the visibility and control needed to measure the progress and quality of
        each order. Every detail is taken care of.
              </p>
            </div>
          </div>

          <div className="timelines">
            <div className="info">
              <h3 className="timelines-title  text-3xl font-bold mb-5"> Quality Control </h3>
              <p>
              We have experienced technicians who
        monitor and control the quality at factories and discuss with customers
        the technical developments and opportunities for gaining optimal
        efficacy. We ensure that all necessary tests of materials are done on
        time with reputable test institutes or with in.
              </p>
            </div>
          </div>

          <div className="timelines">
            <div className="info">
              <h3 className="timelines-title  text-3xl font-bold mb-5"> Minimum Order Qty (MOQ) </h3>
              <p>
              Most of the styles, we need
        minimum quantity, which is different according to different styles and
        negotiable always.
              </p>
            </div>
          </div>

          <div className="timelines">
            <div className="info">
              <h3 className="timelines-title  text-3xl font-bold mb-5"> Lead Time </h3>
              <p>
              As our production facilities are totally
        vertical operations, this enables us to maximize business opportunities
        with our customers, for example we can offer on local sourced fabrics
        lead times from 45 to 55 days after approvals which is paramount in
        servicing the high street retail sectors. For production using imported
        fabric the lead times can vary from 90 to 120 days depending on the
        fabric.
              </p>
            </div>
          </div>

          <div className="timelines">
            <div className="info">
              <h3 className="timelines-title  text-3xl font-bold mb-5"> Beginning of Order Execution </h3>
              <p>
              Once the L/C is received
        in our bank we purchase the required fabric or yarn and make required
        sample (counter, size set and PP) for approval from customer. This
        sample will be exact to customer specifications in design and fabric.
        Upon approval we will start manufacturing the product.
              </p>
            </div>
          </div>

          <div className="timelines">
            <div className="info">
              <h3 className="timelines-title  text-3xl font-bold mb-5"> Order Execution </h3>
              <p>
              We closely monitor the orders at all
        stages from sampling to shipment. This includes critical path
        information which highlights the progress of the order from placement
        through shipment arrival. The process is seamless, requiring no special
        attention from customer side until the goods arrive at agreed
        destination.
              </p>
            </div>
          </div>

          
          <div className="timelines">
            <div className="info">
              <h3 className="timelines-title  text-3xl font-bold mb-5"> Final Inspection </h3>
              <p>
              The consignment is finally checked,
              packed under close supervision of our QA team according to AQL Standard.
              We are looking forward to hearing your favorable response. In the mean
              time if you need any more information please feel free to Contact us.
              </p>
            </div>
          </div>

        </div>
      </div>

  
    </div>
    <Footer></Footer>
</>
  );
};

export default HowWeWork;
