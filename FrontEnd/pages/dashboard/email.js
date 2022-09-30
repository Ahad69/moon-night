import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import DashNav from "../components/dashNav";
import Navbar from "../components/navbar";
import { useRouter } from 'next/router';

const Email = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmail] = useState([]);
  const [user, loading, errorAuth] = useAuthState(auth);
  const router = useRouter();
  useEffect(()=>{
    if(!user){
      router.push('/dashboard/login')
    }
  })

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/teximco/contact-collection")
      .then((res) => res.json())
      .then((data) => {
        setEmail(data);
        setIsLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/teximco/contact-collection/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = emails.filter((item) => item._id !== id);
              setEmail(remaining);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <Head>
        <title>Emails</title>
      </Head>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
       
        <div className="drawer-content bg-gray-100  justify-center">
        <DashNav></DashNav>
          {/* divided  */}
          <h1 className="text-5xl text-center">Emails {emails.length} </h1>

          {isLoading ? (
                  <svg className="spinner animate-spin mr-3 ..." viewBox="0 0 24 24"> </svg>
          ) : (
            <div className="dashboard-content">
              {emails.map((email) => (
                <div className="email-title" key={email._id}>
                  <a href={`#${email._id}`}>
                    New message from {email.name} {email.email}
                  </a>
                  <div className="modal" id={`${email._id}`}>
                    {/* "#my-modal-2" */}
                    <div className="modal-box">
                      <h1 className="text-center font-bold">Email</h1>
                      <hr />
                      <p className="py-4">Name : {email.name}</p>
                      <hr />
                      <p className="py-4">Email : {email?.email}</p>
                    
                      <hr />
                      <p className="py-4">Body  : {email.message} </p>
                      <hr />
                      <img
                        width={100}
                        src={`data:image/png;base64,${email.image}`}
                        alt=""
                      />
                      
                      <div className="modal-action">
                        <button className="btn btn-outline btn-error" onClick={() => handleDelete(email._id)}>
                          {" "}
                          Delete{" "}
                        </button>
                        <a href="#" className="btn btn-outline btn-info">Close</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* divided  */}
        </div>
        <div className="drawer-side  fixed h-full">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Email;
