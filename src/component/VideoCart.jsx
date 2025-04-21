import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY } from '../constant/Youtube';

const VideoCart = ({ item }) => {
    const [ytIcon, setYtIcon] = useState("");
    const [loadingIcon, setLoadingIcon] = useState(true);

    const getYoutubechannelName = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${API_KEY}`);
            if (res.data.items.length > 0) {
                setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
                setLoadingIcon(false);
            }
        } catch (error) {
            console.log('Error fetching YouTube channel icon:', error);
            setLoadingIcon(false);
        }
    };

    useEffect(() => {
        if (item?.snippet?.channelId) {
            getYoutubechannelName();
        }
    }, [item]);

    const thumbnailUrl = item.snippet.thumbnails?.medium?.url || "https://via.placeholder.com/300x200.png?text=No+Thumbnail";
    const channelIconUrl = ytIcon || "https://via.placeholder.com/48x48.png?text=No+Icon";

    return (
        <div className="ml-2 mr-2">
            <img className="w-full rounded-xl" src={thumbnailUrl} alt="ytvideo" />
            <div>
                <div className="flex mt-2">
                    <img
                        className="w-12 h-12 rounded-full"
                        src={channelIconUrl}
                        alt="YouTube Icon"
                        style={loadingIcon ? { opacity: 0.5 } : { opacity: 1 }}
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