import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import DashNav from "../../components/dashNav";
import auth from "../../../firebase.init";

const Addmedia = () => {
  const [catagory, setCatagory] = useState("image");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [img , setImg] = useState('')
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [dummyimgs, setDummyimgs] = useState([{ img: '/product.png' }]);
  const [disabled, setDisabled] = useState(false);  
  const [imgLink , setImgLink] = useState('')
  const [file, setFile] = useState();
  const [medias , setMedias] = useState([])
  const [limit, setLimit] = useState("");  
  const [isLoading, setIsLoading] = useState(false);
  const [user, loading, errorAuth] = useAuthState(auth);
  const router = useRouter();

  const id = router.query.id


  useEffect(()=>{
    setIsLoading(true)
      fetch("http://localhost:5000/teximco/media")
      .then(res=> res.json())
      .then(data => {
        setMedias(data?.data?.medias)
        setIsLoading(false)
      })

  },[ ])

 const findData = medias.find(a=> a._id == id)



  useEffect(() => {
    if (img?.size > 500000) {
      setError(true);
    }
    if (img?.size < 500000) {
      setError(false);
    }
  });
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
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      setDescription(editorRef.current.getContent());
    }
  };
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


  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { description, name, subject, videoLink, type:catagory  , image: imgLink };

    fetch(`http://localhost:5000/teximco/media/${id}`, {
      method: 'PATCH',
      headers : {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "success") {
          toast(`${name}, You Added a Media Successfully`, {
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
        e.target.reset();
      });


  };

  useEffect(() => {
    if (!user) {
      router.push("/dashboard/login");
    }
  });

  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-gray-100 w-full">
          <DashNav></DashNav>
          <div className="container">
            <h1 className="text-4xl text-center mt-6 mb-10">Update Media ({findData?.name})</h1>
            <form onSubmit={handleSubmit}>
              <div className="form">
                <p className="font-bold">Reporter </p>
                <p className="font-bold">:</p>
                <input
                  onBlur={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Full Name"
                  defaultValue={findData?.name}
                  className="input input-bordered input-info w-full max-w-lg"
                />
              </div>
              <div className="form">
                <p className="font-bold">Type </p>
                <p className="font-bold">:</p>
                <select
                  type="text"
                  onChange={(e) => setCatagory(e.target.value)}
                  className="input input-bordered input-info w-full h-10 max-w-lg mt-5"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>

              {catagory == "image" ? (
                <div className="form">
                  <p className="font-bold">Image </p>
                  <p className="font-bold">:</p>

                  <div className="form-file">
                    <div className="productimageContainer mt-5">
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
                                    className="uploadImgs"
                                  />
                                </div>
                                <p className="block text-sm mx-auto d-flex justify-content-center">
                                  {limit}
                                </p>
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
                                 
                                  </div>
                                ) : (
                                  <div className="imagesSaveButtons">
                                    {limit ? (
                                      <button
                                        className="saveButton"
                                        onClick={firstImage}
                                        disabled
                                        type="button"
                                        color="primary"
                                      >
                                        {isLoading ? "Saving " : "Save"}
                                      </button>
                                    ) : (
                                      <button
                                        className="saveButton"
                                        onClick={firstImage}
                                        type="button"
                                        color="primary"
                                      >
                                        {isLoading ? "Saving " : "Save"}
                                      </button>
                                    )}

                                
                                  </div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="form mt-5">
                  <p className="font-bold">Embeded Link </p>
                  <p className="font-bold">:</p>
                  <input
                    type="text"
                    onBlur={(e) => setVideoLink(e.target.value)}
                    placeholder="Embeded video link"
                    className="input input-bordered input-info w-full max-w-lg"
                  />
                </div>
              )}
             

              <div className="form">
                <p className="font-bold">Subject </p>
                <p className="font-bold">:</p>
                <textarea
                  onBlur={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered input-info w-full h-20 max-w-lg mt-5"
                />
              </div>

              <div className="form">
                <p className="font-bold">Description </p>
                <p className="font-bold">:</p>
                <Editor
                  onBlur={log}
                  apiKey="lux3g93dx5gxawltm3ptyg2r21e35usqhz5xe3judz0yao85"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue=""
                  init={{
                    height: 250,
                    menubar: false,
                    plugins: [
                      "advlist",
                      "autolink",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "code",
                      "fullscreen",
                      "insertdatetime",
                      "media",
                      "table",
                      "code",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "insertfile image media pageembed template link anchor codesample | bold italic forecolor | alignleft aligncenter " +
                      "undo redo | blocks | " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    image_caption: true,
                    image_advtab: true,
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px ;  }",
                    relative_urls: true,
                  }}
                />
              </div>
              <button
                disabled={error}
                type="submit"
                className="shop-button3 block  m-auto mt-5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="drawer-side  fixed h-full">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            <img className="dashLogo" src="/dashLogo.png" alt="" />
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

export default Addmedia;
