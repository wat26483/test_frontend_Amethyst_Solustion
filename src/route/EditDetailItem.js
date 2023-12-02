import React, { useState, useContext, useEffect } from 'react'
import CardInfoCopyRight from '../component/cardinfocopyright/CardInfoCopyRight'
import CardInfo from '../component/cardinfo/CardInfo'
import Footter from '../component/footter/Footter'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Context } from '../App'
import Headerdetel from '../component/Header/Headerdetel'
import { GrFormPreviousLink } from "react-icons/gr";
import { LuSave } from "react-icons/lu";

function EditDetailItem() {
  const navigate = useNavigate()
  const { selected, setData, data } = useContext(Context);
  const { id } = useParams();
  const SingleSelect = selected.filter((SingleSelect) => SingleSelect.id === id)
  const [info, setInfo] = useState(...SingleSelect);
  
  // เมื่อมีการกด Save ให้ Update ข้อมูล
  function HandleOnClickUpdate() {
    const RegPhone = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const RegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const DataUpdate = data.map(OldData => {
      if (OldData.id === info.id) {
        return info
      } else {
        return OldData
      }
    })
    if (info.nameowner === '' || info.nameowner.length < 3) {
      return document.getElementById("name").innerHTML = "กรุณาใส่ชื่อ";
    } else if (info.phonenumber === '' || !info.phonenumber.match(RegPhone)) {
      return document.getElementById("phone").innerHTML = "กรุณาใส่เบอร์โทรศัพท์ให้ภูกต้อง";
    } else if (info.email === '' || !info.email.match(RegEmail)) {
      return document.getElementById("email").innerHTML = "กรุณาใส่อีเมลให้ภูกต้อง";
    } else {
      setData(DataUpdate)
      navigate('/detail')
    }


  }

  return (
    <div className='bg-slate-200'>
      <Headerdetel />
      <div className='flex justify-between w-11/12 md:mt-8 md:my-5 md:w-9/12 md:m-auto'>
        <p>แก้ไขการแสดงผลงาน</p>
        <div>
          <Link to='/detail'><button className='mr-4 p-1.5 rounded-full border-4 bg-white text-blue-500'><GrFormPreviousLink size={24} /></button></Link>
          <button className='p-1.5 rounded-full border-4 bg-white text-blue-500' onClick={HandleOnClickUpdate}><LuSave size={24} /></button>
        </div>
      </div>
      <div className='flex flex-col justify-between w-full sm:w-11/12 md:w-9/12 sm:m-auto'>
        <CardInfoCopyRight info={info} setInfo={setInfo} />
        <CardInfo info={info} setInfo={setInfo} />
      </div>
      <Footter />
    </div>
  )
}

export default EditDetailItem