import React, { useEffect } from 'react';
import axios from "axios";
import { YOUTUBE_VIDEO_API, API_KEY } from '../constant/Youtube';
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from '../utils/appSlice';

const VideoContainer = () => {
    const { video, category } = useSelector((store) => store.app);
    const dispatch = useDispatch();

    const fetchingYoutubeVideo = async () => {
        try {
            const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
            dispatch(setHomeVideo(res?.data?.items));
        } catch (error) {
            console.error("Error fetching YouTube videos:", error);
        }
    };

    const fetchVideoByCategory = async (category) => {
        try {
            const res = await axios.get(
                `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&key=${API_KEY}`
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
            {video.map((item) => (
                <Link
                    to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`}
                    state={{ video: item }}
                    key={typeof item.id === 'object' ? item.id.videoId : item.id}
                >
                    <VideoCart item={item} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;