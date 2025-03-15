import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Avatar from 'react-avatar';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegShareSquare } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import LiveChat from './LiveChat'; // Import the LiveChat component

const Watch = () => {
  const [singleVideo, setSingleVideo] = useState(null);

  const location = useLocation();
  const video = location.state?.video;

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleVideo();
  }, []);

  if (!video) {
    return <div>Video not found!</div>;
  }

  const videoId = video.id.videoId || video.id;

  return (
    <div className="mt-20 ml-3 flex">
      {/* Video section */}
      <div className="flex-1 mr-5">
        <iframe
          width="760"
          height="380"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold mt-2 text-lg">{singleVideo?.snippet?.title}</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-[42%]">
            <div className="flex items-center">
              <Avatar src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
              <h1 className="ml-5 font-bold">{singleVideo?.snippet?.channelTitle}</h1>
            </div>
            <button className="px-4 py-1 font-medium bg-black text-white rounded-full ml-5">Subscribe</button>
          </div>
          <div className="flex items-center justify-between w-[41.5%]">
            <div className="flex items-center mr-3">
              <div className="flex items-center cursor-pointer bg-gray-300 px-4 py-1.5 rounded-full mr-3">
                <AiOutlineLike size="22px" className="mr-3" />
                <AiOutlineDislike size="22px" />
              </div>
              <div className="flex items-center cursor-pointer bg-gray-300 px-3 py-1.5 rounded-full mr-3">
                <FaRegShareSquare size="20px" />
                <span className="ml-2">Share</span>
              </div>
              <div className="flex items-center cursor-pointer bg-gray-300 px-3 py-1.5 rounded-full">
                <CiSaveDown2 size="20px" />
                <span className="ml-2">Download</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Section */}
      <div className="w-[350px] ml-5 flex-shrink-0">
        <LiveChat /> {/* Render LiveChat component here */}
      </div>
    </div>
  );
};

export default Watch;
