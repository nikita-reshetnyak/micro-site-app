import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Banner } from '../Banner/Banner'
import './video-player.scss'
import { useNavigate } from 'react-router-dom'
const VideoPlayer = () => {
   const [visible, setVisible] = useState(false)
   const [playing, setPlaying] = useState(true)
   const [showScreen, setShowScreen] = useState(false)
   const navigate = useNavigate();
   const showBanner = () => {
      setVisible(true)
   }
   const showScreenBlock = () => {
      setPlaying(false)
      setVisible(false)
      setShowScreen(true)
   }
   return (
      <div className='video-wrapper'>
         <div className='video-container'>
            <ReactPlayer
               width='100%'
               height='100%'
               url='https://youtu.be/M7FIvfx5J10'
               muted={true}
               controls={false}
               onStart={() => {
                  setTimeout(showBanner, 5000)
               }}
               playing={playing}
               onPlay={() => setPlaying(true)}
               onPause={() => setPlaying(false)}

            />

         </div>
         {visible ? <Banner showScreenBlock={showScreenBlock} /> : ''}
         {showScreen ? navigate("/data-entry") : ''}


      </div>

   )
}
export { VideoPlayer };



