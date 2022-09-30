import Link from "next/link";
import React from "react";

const Arrivals = () => {
  return (
    <>
      <h1 className="arrival-title text-6xl mt-24 text-center">Arrivals</h1>
      <p className="text-center text-sm mt-10">
        you can buy any kind of products from here
      </p>
      <div className="cards mt-10">
        <div className="product-container" data-aos="fade-up">
          <div className="image">
            <img
              src="/outerwear.jpg"
              alt="erwear.jpg"
            />
          </div>
          <div className="card-content">
            <div className="wrapper">
              <h1 className=" text-3xl text-center">Outerwear</h1>
              <div className="btns">
                <button className="up-down">
                  <Link
                    href={{
                      pathname: "/products/[catagory]",
                      query: { catagory: "Hades-and-Caps" },
                    }}
                  >
                  <span data-attr="Explore">Explore</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-container" data-aos="fade-up">
          <div className="image">
            <img
              src="/jacket.png"
              alt="jacket.png"
            />
          </div>
          <div className="card-content">
            <div className="wrapper">
            <h1 className=" text-3xl text-center">Sweater</h1>
              <div className="btns">
                <button className="up-down">
                  <Link
                    href={{
                      pathname: "/products/[catagory]",
                      query: { catagory: "Bags-and-Towel" },
                    }}
                  >
                <span data-attr="Explore">Explore</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-container" data-aos="fade-up">
          <div className="image">
            <img
              src="/knitwear.png"
              alt="knitwear.png"
            />
          </div>
          <div className="card-content">
            <div className="wrapper">
            <h1 className=" text-3xl text-center">Knitwear</h1>
              <div className="btns">
                <button className="up-down">
                  <Link
                    href={{
                      pathname: "/products/[catagory]",
                      query: { catagory: "Knitwear" },
                    }}
                  >
                  <span data-attr="Explore">Explore</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-container" data-aos="fade-up">
          <div className="image">
            <img
              src="/caps.png"
              alt="caps.png"
            />
          </div>
          <div className="card-content">
            <div className="wrapper">
            <h1 className=" text-3xl text-center">Heads/Caps</h1>
              <div className="btns">
                <button className="up-down">
                  <Link
                    href={{
                      pathname: "/products/[catagory]",
                      query: { catagory: "Outerwear" },
                    }}
                  >
             <span data-attr="Explore">Explore</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-container" data-aos="fade-up">
          <div className="image">
            <img
              src="/jeanswear.png"
              alt="jeanswear.png"
            />
          </div>
          <div className="card-content">
            <div className="wrapper">
            <h1 className=" text-3xl text-center">Jeanswear</h1>
              <div className="btns">
                <button className="up-down">
                  <Link
                    href={{
                      pathname: "/products/[catagory]",
                      query: { catagory: "Jeanswear" },
                    }}
                  >
                    <span data-attr="Explore">Explore</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-container" data-aos="fade-up">
          <div className="image">
            <img
              src="/bags.jpg"
              alt="bags.jpg"
            />
          </div>
          <div className="card-content">
            <div className="wrapper">
            <h1 className=" text-3xl text-center">Bags/Towels</h1>
              <div className="btns">
                <button className="up-down">
                  <Link
                    href={{
                      pathname: "/products/[catagory]",
                      query: { catagory: "Sweater" },
                    }}
                  >
                      <span data-attr="Explore">Explore</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrivals;
