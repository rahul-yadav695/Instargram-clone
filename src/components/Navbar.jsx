import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { TiTick } from "react-icons/ti";


const Navbar = () => {
    const avatarr = [
        { id: 1, img: 'https://i.pinimg.com/236x/27/d7/9b/27d79b35cab419e95a0c05f990f13d9f.jpg', name: 'rahul yadav' },
        { id: 2, img: 'https://i.pinimg.com/736x/7f/0b/27/7f0b27278c0b5cf841ab5e20a754bce1.jpg', name: 'Vikash' },
        { id: 3, img: 'https://assets.vogue.in/photos/5dabca55c15ce800083be622/2:3/w_2560%2Cc_limit/Prabhas.jpg', name: 'Bahubali' },
        { id: 4, img: 'https://www.hindustantimes.com/ht-img/img/2025/07/07/550x309/Rashmika_Mandanna_Kodava_1751885237657_1751885265077.jpg', name: 'Ridhika' },
        { id: 5, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Chris_Evans_at_the_2025_Toronto_International_Film_Festival_%28cropped%29.jpg/250px-Chris_Evans_at_the_2025_Toronto_International_Film_Festival_%28cropped%29.jpg', name: 'Raju' },
        { id: 6, img: 'https://img.etimg.com/thumb/width-1200,height-1200,imgsize-80284,resizemode-75,msid-90911048/magazines/panache/kgf-chapter-2-hindi-to-break-record-of-baahubali-2-and-become-the-fastest-film-to-enter-rs-200-cr-club.jpg', name: 'Roshan' },
        { id: 7, img: 'https://www.bollywoodhungama.com/wp-content/uploads/2022/04/4fed31f9-4214-4c0d-a5d7-e6753119640f.jpg', name: 'Yash' },
    ]
    return (
        <>
            <div className='flex justify-around mt-10 text-2xl font-bold'>
                <p className='text-3xl cursor-pointer'><BsPlusLg /></p>
                <h1 className='italic'>Instagram</h1>
                <p className='cursor-pointer'><FaRegHeart /></p>
            </div>

            <div className='flex gap-10 mt-8 justify-center'>
                {avatarr.map((item, index) => <div key={index} >
                    <img className='rounded-full w-[70px] h-[70px] border-4 border-red-600 cursor-pointer' src={item.img} alt="" />
                    <p className='text-center text-sm '>{item.name}</p>
                </div>
                )}
            </div>


            <div className='back_img'>
                <div className='flex gap-2 p-2'>
                    <img className='rounded-full w-[70px] h-[70px] border-4 border-red-600 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnR4VCbXGXAazWbjuURO_mdAtbROPIhswfg&s" alt="" />
                    <div>
                        <p className='flex text-white'>Rahulyadav <span className='text-2xl'><TiTick /></span></p>
                        <p className='text-white'>Tejo babo aav lo 🎵</p>
                    </div>
                </div>
            </div>
            <div>
                <p><FaRegHeart /></p>
            </div>
        </>
    )
}

export default Navbar
