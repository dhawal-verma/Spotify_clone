import React, { useState } from 'react'

const List = ({list:{cover,name,artist,url}}) => {

    const [duration, setDuration] = useState(1)
    var au = document.createElement('audio');
    au.src = url
    au.addEventListener('loadedmetadata', function(){
        setDuration(au.duration/60);
    },false);

  return (
    <div className='p-4 h-full flex align-middle justify-center '>
        
            <div className='rounded-full'>
                <img src={cover} alt="img" />
            </div>
        <div className='flex align-bottom justify-between px-5 h-full w-full'>

            <div>
                    <div  className='font-normal text-lg'>{name}</div>
                    <div className='font-extralight text-sm text-opacity-30'>{artist}</div>
            </div>

            <div className='text-lg flex items-center font-light justify-center'>
                <div>{duration.toFixed(2)} min</div>
            </div>

        </div>
    </div>
  )
}

export default List