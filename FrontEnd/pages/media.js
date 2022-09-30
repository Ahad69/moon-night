import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./components/navbar";

const Media = () => {
  const [medias, setMedias] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/teximco/media")
      .then((res) => res.json())
      .then((data) => {
        setMedias(data.data?.medias);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Media</title>
      </Head>
      <Navbar></Navbar>
      {isLoading ? (
        <div className=" rounded-md p-4 max-w-2xl w-full mx-auto">
          <div className="animate-pulse flex space-x-96">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>

                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="h-2 bg-slate-200 rounded"></div>

              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
            <div className="managing-director">
                <div className="content-managing-director">
                A Visionary Entrepreneurs <span className=""> Mr. Mohammad Mijanur Rahman </span>
                Managing Director of <span className="">TEXIMCO (BD) LTD.</span> Acquires of more
                than 15 years’ professional & business experience of
                Bangladesh Garments Industries for many valued customers in
                the world with efficiency, honesty, and reliability.
                <br />
                He has a wide range of Business experience in BD garments
                Industries. He has a very strong business grip over backward &
                forward linkage business of readymade garments and has
                gained strong knowledge over garments production,
                International Marketing, Merchandising, Quality, Negotiations.
                <br />
                In 2021, there were more than 4,500 garment factories,
                employing about 4.5 million people, a part of Bangladesh’s $30
                billion-a-year export-oriented ready-made garment (RMG)
                industry.
                <br />
                Bangladesh is the world’s second-largest apparel exporter of
                the world. Bangladesh has become the ideal choice for most
                buyers around the globe to carry out their production
                operations at the most competitive price range, best quality &
                on time delivery.
                <br />
                Now the Bangladesh RMG sector also has 155 LEED-certified
                green garments factories which has taken our industries to a
                unique height.

                </div>
                <div className="image-managing-director">
                    <img src='media-banner.jpeg' />
                </div>
            </div>
          <h1 className="text-5xl text-center mt-12">Media</h1>
          <div className="media">
            {medias?.map((media) => (
              <div key={media._id} className="media-cards m-auto p-2 mt-10">
                {media?.type == "image" && (
                  <img src={media?.image} alt="" />
                )}
                {media?.type == "video" && (
                  <iframe
                    width="330"
                    height="250"
                    src={media?.videoLink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
                {/* <img className="blog-img" src={`data:image/png;base64,${blog.img}`}  alt="" /> */}

                <br />

                <h4 className="text-lg">Name : {media?.name} </h4>
                <small>Date : 21/08/2022 </small>
                <br />
                <span className="text-2xl">
                  Subject : {media?.subject.slice(0, 20)}
                </span>
                <br />
                <button className="mt-5 block m-auto media-button">
                  <Link
                    href={{
                      pathname: "/media/[id]",

                      query: { id: media?._id },
                    }}
                  >
                    Details
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
