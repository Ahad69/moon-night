import Link from 'next/link';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import DashNav from '../components/dashNav';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useRouter } from 'next/router';


const AddProducts = () => {
  const [error , setError] = useState(false)
  const [img , setImg] = useState('')
  const [img2, setImag2] = useState("");
  const [imgLink , setImgLink] = useState('')
  const [file2, setFile2] = useState();
  const [imgLink2, setImgLink2] = useState("");
  const [name , setName] = useState('')
  const [category , setCategory] = useState('')
  const [user, loading, errorAuth] = useAuthState(auth);
  const [disabled, setDisabled] = useState(false);  
  const [disabled2, setDisabled2] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [dummyimgs, setDummyimgs] = useState([{ img: '/product.png' }]);
  const [dummyimgs2, setDummyimgs2] = useState([{ img: '/product.png' }]);
  const [file, setFile] = useState();
  const [limit, setLimit] = useState("");  
  const [addImage, setAddImage] = useState(0);


  const router = useRouter();

  const addNew = () => {
    setAddImage(addImage + 1);
  };

  const _handleImgChange = (e, i) => {
    e.preventDefault();
    let reader = new FileReader();
    const image = e.target.files[0];
    if(image.size >= 200000){
      setLimit('Image size must be less than 2M')
    }else{
      setLimit('')
    }
    reader.onload = () => {
        dummyimgs[i].img = reader.result;
        setFile({ file: file });
        setDummyimgs(dummyimgs);
      };
      reader.readAsDataURL(image);
  };
  const _handleImgChange2 = (e, i) => {
    e.preventDefault();
    let reader = new FileReader();
    const image = e.target.files[0];
    if(image.size >= 200000){
      setLimit('Image size must be less than 2M')
    }else{
      setLimit('')
     
    }
    reader.onload = () => {
      dummyimgs2[i].img = reader.result;
      setFile2({ file: file2 });
      setDummyimgs2(dummyimgs2);
    };
    reader.readAsDataURL(image);
  };

  useEffect(()=>{
    if(img?.size > 500000){
      setError(true)
    }
    if(img?.size < 500000){
      setError(false)
    }
 
  })

  useEffect(()=>{
    if(!user){
      router.push('/dashboard/login')
    }
  })


  const firstImage = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData()
    formData.append('images', img)

    await fetch("http://localhost:5000/teximco/image", {
    	method: "POST",
    	body : formData
      })
    	.then((res) => res.json())
    	.then((result) => {
    		setImgLink(result.payload.url)
      setDisabled(true)
    		setIsLoading(false)
    	})
  };
  const secondImage = async (e) => {
    setIsLoading2(true);
    e.preventDefault();

    const formData = new FormData()
    formData.append('images', img2)
    await fetch("http://localhost:5000/teximco/image", {
    	method: "POST",
    	body : formData
      })
    	.then((res) => res.json())
    	.then((result) => {
   
    		setImgLink2(result.payload.url)
        setDisabled2(true)
        setIsLoading2(false);
    	})

  };


  const handleSubmit = (e) =>{
    e.preventDefault()

    const data = {name , category , imgF: imgLink2, imgS :imgLink }


    fetch("http://localhost:5000/teximco/products/", {
      method: 'POST',
      headers : {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
     
        if (data.status == "success") {
          toast(`${name}, You Added a Product Item`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
        setDummyimgs([{ img: '/product.png' }])
        setDummyimgs2([{ img: '/product.png' }])
        e.target.reset();
      });

  }
    return (
        <div>
          <Head>
            <title>Add Products</title>
          </Head>

        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-gray-100 w-full">
          <DashNav></DashNav>
          
          <div className="container">
              <h1 className='text-4xl text-center mt-6 mb-10'>Add Product</h1>
              <form onSubmit={handleSubmit}>

              {addImage == 0 && (
                  <div className="productimageContainer">
                    <div className="add-product ProfileImage">
                      <ul className="file-upload-product">
                        {dummyimgs.map((res, i) => {
                          return (
                            <li key={i}>
                              <div className="box-input-file2 block">
                                <input
                                  className="upload"
                                  type="file"
                                  onChange={(e) => _handleImgChange(e, i)}
                                  onBlur={(e) => setImg(e.target.files[0])}
                                />
                                <img
                                  alt=""
                                  src={res.img}
                                  width="200"
                                  className='uploadImgs'
                                />
                            
                              </div>
                              <p className="block text-sm mx-auto d-flex justify-content-center">{limit}</p>
                              {disabled ? (
                                <div className="imagesSaveButtons">
                                <button
                                disabled
                                  className="saveButton"
                                  onClick={firstImage}
                                  type="button"
                                  color="primary"
                                >
                             
                                 Saved
                                </button>{" "}
                                <button  onClick={addNew}>Add new</button>
                              </div>
                              ) : (
                                <div className="imagesSaveButtons">
                                  { limit ?   <button
                                      className="saveButton"
                                      onClick={firstImage}
                                      disabled
                                      type="button"
                                      color="primary"
                                    > 
                                      
                                      {isLoading ? "Saving " : "Save"}
                                    </button> :
                                      <button
                                      className="saveButton"
                                      onClick={firstImage}
                                      type="button"
                                      color="primary"
                                    > 
                                      
                                      {isLoading ? "Saving " : "Save"}
                                    </button>
                                  }
                               
                                  <button disabled  onClick={addNew}>Add new</button>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}

                {addImage == 1 && (
              <div className="containerImageSelection">
                    {" "}
                    <div className="productimageContainer">
                      <div className="add-product ProfileImage">
                        <ul className="file-upload-product">
                          {dummyimgs.map((res, i) => {
                            return (
                              <li key={i}>
                                <div className="box-input-file2 block">
                                  <input
                                    className="upload"
                                    type="file"
                                    onChange={(e) => _handleImgChange(e, i)}
                                    // onBlur={(e) => setImag(e.target.files[0])}
                                  />
                                  <img
                                    alt=""
                                    src={res.img}
                                    width="200"
                                    className='uploadImgs'
                                  />
                                </div>
                                {disabled ? (
                                   <div className="imagesSaveButtons">
                                
                                   <button
                                      className="saveButton"
                                      disabled
                                     type="button"
                                     color="primary"
                                   >
                                
                                     Saved
                                   </button>{" "}
                                   <button  disabled onClick={addNew}>Add new</button>
                                 </div>
                                ) : (
                                  <div className="imagesSaveButtons">
                                
                                  <button
                                     className="saveButton"
                                     disabled
                                    type="button"
                                    color="primary"
                                  >
                               
                                    {isLoading2 ? "Saving " : "Save"}
                                  </button>{" "}
                                  <button disabled onClick={addNew}>Add new</button>
                                </div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="productimageContainer">
                      <div className="add-product ProfileImage">
                        <ul className="file-upload-product">
                          {dummyimgs2.map((res, i) => {
                            return (
                              <li key={i}>
                                <div className="box-input-file2 block">
                                  <input
                                    className="upload"
                                    type="file"
                                    onChange={(e) => _handleImgChange2(e, i)}
                                    onBlur={(e) => setImag2(e.target.files[0])}
                                  />
                                  <img
                                    alt=""
                                    src={res.img}
                                    width="200"
                                    className='uploadImgs'
                                  />
                                </div>
                                <p className="block mx-auto d-flex justify-content-center">{limit}</p> 
                                {disabled2 ? (
                               <div className="imagesSaveButtons">
                                
                               <button
                                  className="saveButton"
                                  disabled
                                 type="button"
                                 color="primary"
                               >
                            
                               Saved
                               </button>{" "}
                               <button disabled  onClick={addNew}>Add new</button>
                             </div>
                                ) : (
                                  <div className="imagesSaveButtons">
                                
                                { limit ?   <button
                                      className="saveButton"
                                    
                                      disabled
                                      type="button"
                                      color="primary"
                                    > 
                                      
                                      {isLoading2 ? "Saving " : "Save"}
                                    </button> :
                                      <button
                                      className="saveButton"
                                      onClick={secondImage}
                                      type="button"
                                      color="primary"
                                    > 
                                      
                                      {isLoading2 ? "Saving " : "Save"}
                                    </button>
                                  }
                                  <button disabled onClick={addNew}>Add new</button>
                                </div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                  
              
          
                <div className="form mb-2">
                  <p className='font-bold'>Title </p>
                  <p className='font-bold'>:</p>
                  <input onBlur={(e)=>setName(e.target.value)} type="text" placeholder="Full Name" className="input input-bordered input-info w-full max-w-lg" />
                </div>

                <div className="form">
                  <p className='font-bold'>Category </p>
                  <p className='font-bold'>:</p>
                  <select  type="text"  onBlur={(e)=>setCategory(e.target.value)} className="input input-bordered input-info w-full h-10 max-w-lg mt-5 mb-5">
                  <option value="Sweater">-- Select Category --</option>
                  <option value="Sweater">Sweater</option>
                  <option value="Knitwear">Knitwear</option>
                  <option value="Jeanswear">Jeanswear</option>
                  <option value="Outerwear">Outwear</option>
                  <option value="Bags-and-Towels">Bags/Towels</option>
                  <option value="Hades-and-Caps">Hades/Caps</option>
                  </select>
                </div>
           
               {/* <div className="form">
                  <p className='font-bold'>Image 1 </p>
                  <p className='font-bold'>:</p>
              
                  <div className="form-file">
             
              <input
                className="file input-bordered input-info w-full max-w-lg m-4"
                name="image"
              onChange={(e) => setImg(e.target.files[0])}
                placeholder="select"
                type="file"
                id=""
              />
              </div>
          
              </div>

               <div className="form">
                  <p className='font-bold'>Image 2 </p>
                  <p className='font-bold'>:</p>
              
                  <div className="form-file">
             
              <input
                className="file input-bordered input-info w-full max-w-lg m-4"
                name="image"
              onChange={(e) => setImgSecond(e.target.files[0])}
                placeholder="select"
                type="file"
                id=""
              />
              </div> */}
              {/* </div> */}
           
           {
            disabled ?  <button  type="submit" className="shop-button3 block  m-auto mt-5">Submit</button> :  <button disabled={disabled}   type="submit" className="shop-button3 block  m-auto mt-5">Submit</button>
           }
               
              </form>
            </div>

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

export default AddProducts;