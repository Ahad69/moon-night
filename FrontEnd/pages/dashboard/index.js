import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useRouter } from 'next/router';
import DashNav from "../components/dashNav";
import { signOut } from "firebase/auth";

const Dashboard = () => {

  const logout = () => {
    signOut(auth);
  };
  const [user, loading, errorAuth] = useAuthState(auth);

  const router = useRouter();
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/teximco/products")
      .then((res) => res.json())
      .then((data) => {
        setPhoto(data.data?.products)
      });
  }, []);

  const Knitwear = photo?.filter((photo) => photo.category == 'Knitwear');
  const Sweater = photo?.filter((photo) => photo.category == 'Sweater');
  const Outerwear = photo?.filter((photo) => photo.category == 'Outerwear');
  const HadesCaps = photo?.filter((photo) => photo.category == 'Hades-and-Caps');
  const Jeanswear = photo?.filter((photo) => photo.category == 'Jeanswear');
  const Bags = photo?.filter((photo) => photo.category == 'Bags-and-Towels');

  useEffect(()=>{
    if(!user){
      router.push('/dashboard/login')
    }
  })


  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
    
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-gray-100 w-full">
        <DashNav></DashNav>
        
    <div className="dash-container">
          <div className="dash-cards knit">
          <h1 className="text-center text-2xl font-bold">Knitwear</h1>
          
          <p className="text-center mt-2 text-3xl">{Knitwear?.length}</p>
          </div>

          <div className="dash-cards sweat">
          <h1 className="text-center text-2xl font-bold">Sweater</h1>
          <p className="text-center mt-2 text-3xl">{Sweater?.length}</p>
          </div>

          <div className="dash-cards jeans">
          <h1 className="text-center text-2xl font-bold">Jeanswear</h1>
          <p className="text-center mt-2 text-3xl">{Jeanswear?.length}</p>
          </div>

          <div className="dash-cards outwear">
          <h1 className="text-center text-2xl font-bold">Outerwear</h1>
          <p className="text-center mt-2 text-3xl">{Outerwear?.length}</p>
      
          </div>

    
          <div className="dash-cards heds">
          <h1 className="text-center text-2xl font-bold">Hades/Caps</h1>
          <p className="text-center mt-2 text-3xl">{HadesCaps?.length}</p>
          </div>
          
          <div className="dash-cards bags">
          <h1 className="text-center text-2xl font-bold">Bags/Towels</h1>
          <p className="text-center mt-2 text-3xl">{Bags?.length}</p>
          </div>
          </div>
         
    </div>
    

        <div className="drawer-side fixed h-full">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <img src="https://i.ibb.co/wyZWxdS/Teximco-logo-main-300x53.png" alt="" />
                <div className="divider"></div> 
            <label className="sideNav">
              {" "}
              <Link href="/dashboard">Dashboard</Link>
            </label>

            <label htmlFor="touch2">
              <span className="span">Product</span>
            </label>

            <input type="checkbox" id="touch2" />
            <ul className="slide2">
              <li>
                {" "}
                <Link href="/dashboard/add-product">Add Product</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href="/dashboard/product-list">Product List</Link>
              </li>
            </ul>

            <label htmlFor="touch">
              <span className="span">Media</span>
            </label>
            <input type="checkbox" id="touch" />
            <ul className="drop">
              <li>
                {" "}
                <Link href="/dashboard/add-media">Add Media</Link>
              </li>
              <li>
                <Link href="/dashboard/media-list">Media List</Link>
              </li>
            </ul>
            <label className="sideNav">
              {" "}
              <Link href="/dashboard/email">Email</Link>
            </label>
            <label className="sideNav"  onClick={logout}>
              {" "}
              <Link href="/dashboard/login">Log Out</Link>
            </label>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
