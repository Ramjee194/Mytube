import React, { useEffect } from 'react';
import axios from "axios";
import { YOUTUBE_VIDEO_API,API_KEY } from '../constant/Youtube'; // Import API_KEY and YOUTUBE_VIDEO_API
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from '../utils/appSlice';


const VideoContainer = () => {
    const { video, category } = useSelector((store) => store.app);
    const dispatch = useDispatch();

    // Function to fetch videos
    const fetchingYoutubeVideo = async () => {
        try {
            const res = await axios.get(`${YOUTUBE_VIDEO_API}`); // Use the imported YOUTUBE_VIDEO_API
            dispatch(setHomeVideo(res?.data?.items));
        } catch (error) {
            console.error("Error fetching YouTube videos:", error);
        }
    };

    // Function to fetch videos by category
    const fetchVideoByCategory = async (category) => {
        try {
            const res = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&key=${API_KEY}` // Use the imported API_KEY
            );
            dispatch(setHomeVideo(res?.data?.items));
        } catch (error) {
            console.error("Error fetching videos by category:", error);
        }
    };

    useEffect(() => {
        if (category === "All") {
            fetchingYoutubeVideo();
        } else {
            fetchVideoByCategory(category);
        }
    }, [category]);

    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                video.map((item) => {
                    console.log(item);
                    return (
                        <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} key={typeof item.id === 'object' ? item.id.videoId : video.id} >
                            <VideoCart item={item} />
                        </Link>

                    )
                })
            }

        </div>
    );
};

export default VideoContainer;