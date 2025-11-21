import React, { useState } from 'react';
import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUser } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import Navbar from './Navbar';

const Notifications = () => {

    const followReq = [
        { id: 1, name: "callanedourado4", img: "https://i.pravatar.cc/40", time: "2w" }
    ];

    const weekData = [
        { id: 2, name: "anh.lth", text: "followed 15.01ha on Instagram.", img: "https://i.pravatar.cc/41", time: "4d" }
    ];

    const monthData = [
        { id: 3, name: "jeong_jeff09", text: "requested to follow you.", img: "https://i.pravatar.cc/42", type: "request" },
        { id: 4, name: "15.01h", text: "is on Instagram.", img: "https://i.pravatar.cc/43", btn: "Follow" },
        { id: 5, name: "hoquyang23", text: "liked your post.", img: "https://i.pravatar.cc/44", post: "https://picsum.photos/50" }
    ];

    const [showNotification, setShowNotification] = useState(false);

    const showNotifPage = () => setShowNotification(true);

    if (showNotification) {
        return <Navbar />;
    }

    return (
        <div className='w-full max-w-md mx-auto bg-white min-h-screen border-2 rounded-2xl pb-20'>
            <div className='flex gap-3'>
                <p onClick={showNotifPage} className='mt-4 cursor-pointer text-3xl'><MdOutlineArrowBack /></p>
                <h1 className='text-xl font-bold p-4'>Notifications</h1>
            </div>

            <div className='px-4'>
                <p className='text-sm font-semibold mb-2'>Follow requests</p>
                {followReq.map(v => (
                    <div key={v.id} className='flex items-center justify-between py-2'>
                        <div className='flex items-center gap-2'>
                            <img src={v.img} className='w-10 h-10 rounded-full' />
                            <p className='text-sm font-semibold'>{v.name} <span className='text-gray-500 text-xs'>{v.time}</span></p>
                        </div>
                        <span className='text-xs text-blue-500 font-medium hover:underline cursor-pointer'>See all</span>
                    </div>
                ))}
            </div>

            <div className='px-4 mt-4'>
                <p className='text-sm font-semibold mb-2'>This Week</p>
                {weekData.map(v => (
                    <div key={v.id} className='flex items-center justify-between py-2'>
                        <div className='flex items-center gap-2'>
                            <img src={v.img} className='w-10 h-10 rounded-full' />
                            <p className='text-sm font-semibold'>{v.name} <span className='font-normal text-gray-500'>{v.text}</span></p>
                        </div>
                        <button className='bg-blue-500 text-white px-3 py-1 rounded-lg cursor-pointer text-xs'>Follow</button>
                    </div>
                ))}
            </div>

            <div className='px-4 mt-4'>
                <p className='text-sm font-semibold mb-2'>This Month</p>
                {monthData.map(v => (
                    <div key={v.id} className='flex items-center justify-between py-2'>
                        <div className='flex items-center gap-3'>
                            <img src={v.img} className='w-10 h-10 rounded-full' />
                            <p className='text-sm font-semibold'>{v.name} <span className='font-normal text-gray-500'>{v.text}</span></p>
                        </div>

                        {v.type === "request" && (
                            <div className='flex gap-2'>
                                <button className='bg-blue-500 text-white px-3 py-1 cursor-pointer rounded-lg text-xs'>Confirm</button>
                                <button className='bg-gray-200 px-3 py-1 rounded-lg cursor-pointer text-xs'>Delete</button>
                            </div>
                        )}

                        {v.btn === "Follow" && (
                            <button className='bg-blue-500 text-white px-3 py-1 cursor-pointer rounded-lg text-xs'>Follow</button>
                        )}

                        {v.post && <img src={v.post} className='w-10 h-10 rounded-md' />}
                    </div>
                ))}
            </div>

            <div className='fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t flex justify-between px-6 py-3 text-2xl'>
                <FaHome /><FaSearch /><FaPlusSquare /><FaHeart /><FaUser />
            </div>
        </div>
    );
};

export default Notifications;
