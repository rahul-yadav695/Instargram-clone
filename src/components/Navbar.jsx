import React, { useState } from 'react'
import { FaRegHeart, FaRegComment, FaHeart } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
import Notification from './Notification';
import Story from './Story';

const Navbar = () => {

    const [showNotification, setShowNotification] = useState(false);

    const showNotifPage = () => {
        setShowNotification(true);
    };

    const [story, setStory] = useState(null);

    const openStory = (img, name) => {
        setStory({ img, name });
    };

    const closeStory = () => {
        setStory(null);
    };

    const avatarr = [
        { id: 1, img: 'https://i.pinimg.com/236x/27/d7/9b/27d79b35cab419e95a0c05f990f13d9f.jpg', name: 'rahul yadav' },
        { id: 2, img: 'https://i.pinimg.com/736x/7f/0b/27/7f0b27278c0b5cf841ab5e20a754bce1.jpg', name: 'Vikash' },
        { id: 3, img: 'https://assets.vogue.in/photos/5dabca55c15ce800083be622/2:3/w_2560%2Cc_limit/Prabhas.jpg', name: 'Bahubali' },
        { id: 4, img: 'https://www.deshsewak.org/images/news/full202591.jpg', name: 'Rashmika' },
        { id: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Chris_Evans_at_the_2025_Toronto_International_Film_Festival_%28cropped%29.jpg/250px-Chris_Evans_at_the_2025_Toronto_International_Film_Festival_%28cropped%29.jpg', name: 'Raju' },
        { id: 6, img: 'https://img.etimg.com/thumb/width-1200,height-1200,imgsize-80284,resizemode-75,msid-90911048/magazines/panache/kgf-chapter-2-hindi-to-break-record-of-baahubali-2-and-become-the-fastest-film-to-enter-rs-200-cr-club.jpg', name: 'Roshan' },
        { id: 7, img: 'https://www.bollywoodhungama.com/wp-content/uploads/2022/04/4fed31f9-4214-4c0d-a5d7-e6753119640f.jpg', name: 'Yash' },
    ];

    const postsData = [
        {
            id: 1,
            profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnR4VCbXGXAazWbjuURO_mdAtbROPIhswfg&s",
            name: "Rahulyadav",
            verify: true,
            song: "Tejo babo aav lo 🎵",
            likes: 300,
            bg: "https://images.indianexpress.com/2022/05/kgf-2-box-office-.jpg"
        },
        {
            id: 2,
            profileImg: "https://media.gettyimages.com/id/87859501/photo/cannes-france-indian-bollywood-actor-hrithik-roshan-is-seen-on-may-15-2009-in-cannes-france.jpg?s=612x612&w=gi&k=20&c=saxqupgtattcIpLof2vypdsiHeCo4C_clMWtIEGD3ZM=",
            name: "Vikas",
            verify: false,
            song: "Dil garden garden 🎧",
            likes: 180,
            bg: "https://images.pexels.com/photos/29412940/pexels-photo-29412940.jpeg"
        },
        {
            id: 3,
            profileImg: "https://m.media-amazon.com/images/I/51fY0wjRGTL._AC_UF894,1000_QL80_.jpg",
            name: "Priya",
            verify: true,
            song: "Tere bin nahi lagda ❤️",
            likes: 500,
            bg: "https://images.pexels.com/photos/15036815/pexels-photo-15036815.jpeg"
        }
    ];

    const [posts, setPosts] = useState(postsData);

    const toggleLike = (id) => {
        setPosts(prev =>
            prev.map(p =>
                p.id === id ? { ...p, likes: p.liked ? p.likes - 1 : p.likes + 1, liked: !p.liked } : p
            )
        );
    };

    if (showNotification) {
        return <Notification />;
    }

    if (story) {
        return <Story img={story.img} name={story.name} closeBitton={closeStory} />;
    }

    return (
        <>
            <div className='flex justify-around items-center mt-6 px-5 text-2xl font-bold'>
                <p className='text-3xl cursor-pointer'><BsPlusLg /></p>

                <h1 className='italic text-xl md:text-3xl'>Instagram</h1>

                <p onClick={showNotifPage} className='cursor-pointer'>
                    <FaRegHeart />
                </p>
            </div>

            <div className='flex gap-6 mt-8 px-4 overflow-x-auto no-scrollbar justify-center'>
                {avatarr.map((item, index) => (
                    <div key={index} className='shrink'>
                        <img
                            onClick={() => openStory(item.img, item.name)}
                            className='rounded-full p-1 w-[70px] h-[70px] md:w-[95px] md:h-[95px] border-4 border-red-600 cursor-pointer'
                            src={item.img}
                            alt=""
                        />
                        <p className='text-center text-sm mt-2'>{item.name}</p>
                    </div>
                ))}
            </div>

            {posts.map(post =>
                <div key={post.id} className='mt-8'>
                    <div onDoubleClick={() => toggleLike(post.id)}
                        className='w-full h-[350px] md:h-[550px] bg-cover bg-center back_img'
                        style={{ backgroundImage: `url(${post.bg})` }} >

                        <div className='flex gap-2 p-4'>
                            <img
                                className='rounded-full w-[60px] h-[60px] md:w-[75px] md:h-[75px] border-4 border-red-600 cursor-pointer'
                                src={post.profileImg}
                            />
                            <div>
                                <p className='flex items-center text-white text-lg md:text-xl'>
                                    {post.name}
                                    {post.verify && <span className='text-2xl text-blue-400'><TiTick /></span>}
                                </p>
                                <p className='text-white text-sm md:text-base'>{post.song}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex text-2xl gap-8 mt-4 px-5 md:px-20 lg:px-40 ml-[50px]'>
                        <p onClick={() => toggleLike(post.id)} className='flex items-center gap-2 cursor-pointer'>
                            <span className='text-sm font-black'>{post.likes}</span>
                            {post.liked ? <p className='text-red-600'><FaHeart /></p> : <FaRegHeart />}
                        </p>

                        <p className='flex items-center gap-2'>
                            <FaRegComment /><span className='text-sm font-bold'>300</span>
                        </p>

                        <p><FaArrowRightArrowLeft /></p>
                        <p><CiShare1 /></p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
