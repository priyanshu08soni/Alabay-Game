import React from 'react'
import socialMedia from '../assets/social-media.png'
import message from '../assets/Union.png'
import socialMask from '../assets/Mask/socialmask.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
const SocialMedia = () => {
  return (
    <div className='socialmediamaincontainer'>
      <h1 className='socialmedia-heading'>SOCIAL MEDIA LINKS</h1>
      <div className='social-media-container'>
        <div className='message'>
            <img className='socialmidea-image-1 ' src={message} alt="message" />
            <div className="overlay-links">
                <div className='social-links'>
                    <div className="social-logo-1">
                        <FaXTwitter/>
                    </div>
                    <a href="">Twitter Link</a>
                </div>
                <div className='social-links'>
                    <div className='social-logo-2'>
                        <FaTelegram/>
                    </div>
                    <a href="">Telegram Link</a>
                </div>
            </div>
        </div>
        <div className='socialmidea-image-2'>

          <img className='socialmidea-image-dog' src={socialMedia} alt="socialMedia" />
          <img src={socialMask} alt="" className="socialmask" />
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
