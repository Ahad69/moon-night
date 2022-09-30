import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import DashNav from '../components/dashNav';
import Swal from 'sweetalert2';
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useRouter } from 'next/router';


const Listproduct = () => {

  const [medias , setMedias] = useState([])
  const [loding , setLoading] = useState(false)
  const [user, loading, errorAuth] = useAuthState(auth);

  
  useEffect(()=>{
    if(!user){
      router.push('/dashboard/login')
    }
  })
  const router = useRouter();
  useEffect(()=>{
    setLoading(true)
      fetch("http://localhost:5000/teximco/products")
      .then(res=> res.json())
      .then(data => {
        setMedias(data.data.products)
        setLoading(false)
      })

  },[ ])
  

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
        const url = `http://localhost:5000/teximco/products/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              const remaining = medias.filter((item) => item._id !== id);
              setMedias(remaining);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
    return (
      <div>
          <Head>
          <title>Products List</title>
          </Head>
          <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-gray-100 w-full">
          <DashNav></DashNav>

          
        {
          loding || loading ?    <svg className="animate-spin mr-3 ..." viewBox="0 0 24 24"> </svg> :  <div className="overflow-x-auto dashboard-content">
          <table className="table table-zebra w-full">
           
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Image</th>
                <th>Image 2</th>
                <th>Action </th>
            
   
              </tr>
            </thead>
            <tbody>
          
          {
            medias?.map((media , index) => <tr key={media?._id}>
              <th>{index + 1}</th>
              <td>{media?.name}</td>
              <td className="product-image"> <img width={80} style={{height: '80px'}}  src={media?.imgS} /> </td>
              <td> <img width={80} style={{height: '80px'}}  src={media?.imgF}/> </td>
              <td>

                 <button onClick={()=>handleDelete(media?._id)} className='bg-red-600 p-1 border rounded'>Delete</button></td>
            </tr>  )
          }
              
            </tbody>
          </table>
        </div>
        }
          
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

export default Listproduct;