import React,{useState} from 'react'
import Headerdetel from '../component/Header/Headerdetel'
import ImgeSlide from '../component/imgeslide/ImgeSlide'
import DetailCard from '../component/Deteltitle/DetailCard'
import Footter from '../component/footter/Footter'

function Detail() {
  const [numberSelect,setNumberSelect]=useState(0);

  return (
    <div className='bg-slate-200 lg:h-full'>
      <div className='w-full'><Headerdetel /></div>
      <div className='w-full flex justify-around h-full items-center lg:p-5 flex-col lg:flex-row '>
        <ImgeSlide numberSelect={numberSelect} 
            setNumberSelect={setNumberSelect} />
        <DetailCard numberSelect={numberSelect}  />
      </div>
      <Footter />
    </div>
  )
}

export default Detail