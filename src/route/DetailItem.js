import React from 'react'
import Headerdetel from '../component/Header/Headerdetel'
import ImgeSlide from '../component/imgeslide/ImgeSlide'
import DetailCard from '../component/Deteltitle/DetailCard'
import Footter from '../component/footter/Footter'

function Detail() {
  return (
    <div>
      <Headerdetel />
      <div>
        <ImgeSlide />
        <DetailCard />
      </div>
      <Footter/>
    </div>
  )
}

export default Detail