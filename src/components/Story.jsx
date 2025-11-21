import React from 'react'

const Story = ({ img, name, closeBitton }) => {
    return (
        <div className='fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center'>
            <img src={img} className='w-[300px] h-[300px] rounded-xl object-cover' />
            <p className='text-white text-xl mt-4'>{name}</p>
            
            <button onClick={closeBitton} className='mt-6 cursor-pointer px-5 py-2 bg-white text-black rounded-lg'> Close </button>
        </div>
    )
}

export default Story;
