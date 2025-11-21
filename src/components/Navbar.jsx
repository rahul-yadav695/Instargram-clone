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
        { id: 1, img: 'https://i.pinimg.com/236x/27/d7/9b/27d79b35cab419e95a0c05f990f13d9f.jpg', name: 'Ranber Kapoor' },
        { id: 2, img: 'https://i.pinimg.com/736x/7f/0b/27/7f0b27278c0b5cf841ab5e20a754bce1.jpg', name: ' Ram Charan' },
        { id: 3, img: 'https://assets.vogue.in/photos/5dabca55c15ce800083be622/2:3/w_2560%2Cc_limit/Prabhas.jpg', name: 'Prabhas' },
        { id: 4, img: 'https://www.deshsewak.org/images/news/full202591.jpg', name: 'Rashmika' },
        { id: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI0wpPyLuDCAxPJkVGGvOv0IRMTxBwGdj4RA&s', name: 'Jr NTR' },
        { id: 6, img: 'https://filmfare.wwmindia.com/content/2022/apr/yashkgf41650602348.jpg', name: 'Yash' },
        { id: 7, img: 'https://www.bollywoodhungama.com/wp-content/uploads/2022/04/4fed31f9-4214-4c0d-a5d7-e6753119640f.jpg', name: 'Yash' },
    ];

    const postsData = [
        { id: 1, profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnR4VCbXGXAazWbjuURO_mdAtbROPIhswfg&s", name: "Rahulyadav", verify: true, song: "Tejo babo aav lo 🎵", likes: 300, bg: "https://images.indianexpress.com/2022/05/kgf-2-box-office-.jpg" },
        { id: 2, profileImg: "https://media.gettyimages.com/id/87859501/photo/cannes-france-indian-bollywood-actor-hrithik-roshan-is-seen-on-may-15-2009-in-cannes-france.jpg?s=612x612&w=gi&k=20&c=saxqupgtattcIpLof2vypdsiHeCo4C_clMWtIEGD3ZM=", name: "Vikas", verify: false, song: "Dil garden garden 🎧", likes: 180, bg: "https://images.pexels.com/photos/29412940/pexels-photo-29412940.jpeg" },
        { id: 3, profileImg: "https://m.media-amazon.com/images/I/51fY0wjRGTL._AC_UF894,1000_QL80_.jpg", name: "Priya", verify: true, song: "Tere bin nahi lagda ❤️", likes: 500, bg: "https://images.pexels.com/photos/15036815/pexels-photo-15036815.jpeg" },
        { id: 4, profileImg: "https://i.pinimg.com/564x/b2/96/42/b2964218ad3c3fda0bbd10b191ed257a.jpg", name: "Sanjay", verify: false, song: "Bholenath vibes 🔱", likes: 220, bg: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg" },
        { id: 5, profileImg: "https://i.pinimg.com/564x/30/76/74/3076746b94247db1a2b8a5f5affdeece.jpg", name: "Anjali", verify: true, song: "O mahi ❤️", likes: 410, bg: "https://images.pexels.com/photos/210006/pexels-photo-210006.jpeg" },
        { id: 6, profileImg: "https://i.pinimg.com/564x/57/79/2e/57792ebaf86a91d7d2fb52f21ed0004f.jpg", name: "Rohit", verify: false, song: "Nagin dance 🐍", likes: 145, bg: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" },
        { id: 7, profileImg: "https://i.pinimg.com/564x/79/41/48/79414828cf0138e95c907ce1cb05463e.jpg", name: "Kiran", verify: true, song: "Kesariya tera... 💛", likes: 520, bg: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg" },
        { id: 8, profileImg: "https://i.pinimg.com/564x/3d/9c/58/3d9c58dc6df91fa7c4d7193da6dac8e1.jpg", name: "Manoj", verify: false, song: "Lut gaye 💔", likes: 199, bg: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" },
        { id: 9, profileImg: "https://i.pinimg.com/564x/f4/91/13/f491136663c1f5f693315219bc0f862c.jpg", name: "Sneha", verify: true, song: "Barish ban jana 🌧️", likes: 370, bg: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg" },
        { id: 10, profileImg: "https://i.pinimg.com/564x/f5/2b/57/f52b576adf61e0c4673fe26c7c0e5917.jpg", name: "Dev", verify: false, song: "Level up ⚡", likes: 160, bg: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg" },
        { id: 11, profileImg: "https://i.pinimg.com/564x/24/7a/a2/247aa2ef4475a2f6186effd2 la.jpg", name: "Meera", verify: true, song: "Raatan lambiyan ✨", likes: 540, bg: "https://images.pexels.com/photos/713664/pexels-photo-713664.jpeg" }
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
                        <img onClick={() => openStory(item.img, item.name)} className='rounded-full p-1 w-[70px] h-[70px] md:w-[95px] md:h-[95px] border-4 border-red-600 cursor-pointer' src={item.img} alt="" />
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

                    <div className='flex text-2xl gap-8 mt-4 px-5 md:px-20 lg:px-40 sm:ml-0'>
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
