import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiYoutubeLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
function Footter() {
  return (
    <footer className=' bg-blue-900 text-white flex p-5'>
      <div className=' w-full flex justify-around'>
        <h1 className='text-5xl'><b>LOGO</b></h1>
        <div>
          <h1>Amethyst Solutions.Co.,Ltd.</h1>
          <p>252/930(N) 17th FL.,Muang THai-Phatra Complex Tower B, Rachadaphisek Road, Huaykwnang, Bangkok 10310</p>
          <div className='flex'>
            <p className='m-1'><FiFacebook /></p>
            <p className='m-1'><IoLogoInstagram /></p>
            <p className='m-1'><RiYoutubeLine /></p>
            <p className='m-1'><CiTwitter /></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footter