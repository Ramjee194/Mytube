import React, { useState, useEffect } from 'react';
import { IoMdSend } from "react-icons/io";
import { SiLivechat } from "react-icons/si";

const LiveChat = () => {
    // State to store chat messages
    const [messages, setMessages] = useState([
        { user: 'User1', text: 'Great video!' },
        { user: 'User2', text: 'I loved the content!' },
    ]);

    const [newMessage, setNewMessage] = useState('');
    const maxMessages = 100;

    // Simulating new messages arriving every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { user: 'User3', text: 'Amazing!' },
            ]);
        }, 3000); // New message every 3 seconds

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;
        setMessages([...messages, { user: 'User', text: newMessage }]);
        setNewMessage('');
    };

    return (
        <div className="border border-gray-300 w-[350px]  ml-5 flex-shrink-0 bg-white p-4 rounded-lg shadow-lg">
            {/* Chat Header */}
            <div className="p-5 rounded-lg  items-center justify-between py-3">
                <h2 className="text-xl font-semibold ">TOP Chat</h2>
                <div className='flex items-center'>
                    <SiLivechat />
                    <p className=''>LiveChat</p>
                </div>
            </div>

            {/* Chat messages container */}
            <div className="space-y-2 overflow-y-auto h-[300px] mb-3 flex flex-col-reverse">
                {messages.map((msg, index) => (
                    <div key={index} className="bg-gray-100 p-2 rounded-lg">
                        <span className="font-semibold">{msg.user}:</span> {msg.text}
                    </div>
                ))}
            </div>

            {/* Input for sending new messages */}
            <div className="flex items-center mt-2 bg-white relative">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 px-4 py-2 bg-gray-200 rounded-full"
                    placeholder="Type a message"
                />
                <button
                    onClick={handleSendMessage}
                    className="absolute right-2 bg-gray-400 text-white px-2 py-2 rounded-full"
                >
                    <IoMdSend size="25px" />
                </button>
            </div>

        </div>
    );
};

export default LiveChat;
