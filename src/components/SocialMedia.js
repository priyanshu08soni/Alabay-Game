import React from 'react'
import socialMedia from '../assets/social-media.png'
import message from '../assets/Union.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
const SocialMedia = () => {
  return (
    <div>
      <h1 className='socialmedia-heading px-32 pt-16'>SOCIAL MEDIA LINKS</h1>
      <div className='flex'>
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
        <img className='socialmidea-image-2 w-50' src={socialMedia} alt="socialMedia" />
      </div>
    </div>
  )
}

export default SocialMedia
