import React, { useContext } from 'react'
import { assests } from '../assests/assests'
import { PlayerContext } from '../context/PlayerContext'
const Track = () => {

    // const {play,pause,playStatus,seekBar,seekBg} = useContext(PlayerContext)
  return (
    <div className='text-white '>
        <div className='flex items-center gap-5 '>
            <div className='w-[60vw] max-w-[380px] mt-5 bg-gray-900 rounded-full cursor-pointer'>
                <hr className='h-1 border-none w-30 bg-white rounded-full' />
            </div>

        </div>

        <div className='flex items-center justify-between py-8 w-[65%] px-10'>
            <img src={assests.setting} alt="setting" />
            <div className='flex items-center justify-around gap-7'>
            <img src={assests.prev} alt="prev" />
            <img src={assests.pause} alt="pause" />
            <img src={assests.play} alt="play" />
            <img src={assests.next} alt="next" />
            </div>
            <img src={assests.sound } alt="sound" />
        </div>
    </div>
  )
}

export default Track