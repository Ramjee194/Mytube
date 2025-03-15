import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../constant/Youtube'; // Assuming the API key is being imported from a constants file
import { useNavigate } from 'react-router-dom';

const VideoCart = ({ item }) => {
    const [ytIcon, setYtIcon] = useState("");  // State to store channel icon
    const [loadingIcon, setLoadingIcon] = useState(true);  // Track loading state of the icon
    const navigate = useNavigate();  // Initialize navigate to handle redirection

    // Fetch YouTube channel icon
    const getYoutubechannelName = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${API_KEY}`);
            if (res.data.items.length > 0) {
                setYtIcon(res.data.items[0].snippet.thumbnails.high.url);  // Update with fetched icon
                setLoadingIcon(false);  // Stop loading after getting icon
            }
        } catch (error) {
            console.log('Error fetching YouTube channel icon:', error);
            setLoadingIcon(false);  // Stop loading if there's an error
        }
    };

    // Fetch channel icon whenever item or channelId changes
    useEffect(() => {
        if (item?.snippet?.channelId) {
            getYoutubechannelName();
        }
    }, [item]);

    // Handle click on video to navigate to the Watch page
    const handleClick = () => {
        navigate('/watch', { state: { video: item } });  // Pass video data to Watch page using state
    };

    // Fallback thumbnail in case it's missing or broken
    const thumbnailUrl = item.snippet.thumbnails?.medium?.url || "https://via.placeholder.com/300x200.png?text=No+Thumbnail";

    // Fallback channel icon in case of missing icon
    const channelIconUrl = ytIcon || "https://via.placeholder.com/48x48.png?text=No+Icon"; // Placeholder for default icon

    return (
        <div className="ml-2 mr-2 cursor-pointer" onClick={handleClick}>
            <img className="w-full rounded-xl" src={thumbnailUrl} alt="ytvideo" />
            <div>
                <div className="flex mt-2">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={channelIconUrl}
                        alt="YouTube Icon"
                        style={loadingIcon ? { opacity: 0.5 } : { opacity: 1 }} // Show loading opacity effect
                    />
                    <div className="ml-2">
                        <h1 className="font-bold">{item.snippet.title}</h1>
                        <p className="text-sm text-gray-600">{item.snippet.channelTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCart;
