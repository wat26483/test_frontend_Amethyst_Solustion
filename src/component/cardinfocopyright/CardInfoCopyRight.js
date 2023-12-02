import React from 'react'

function CardInfoCopyRight({ info, setInfo }) {

  // เก็บstate สำรองใว้ info ก่อน update ข้อมูล
  function HandleOnChangInputname(e) {
    setInfo({
      ...info, nameowner: e.target.value
    })
  }

  function HandleOnChangSelect(e) {
    setInfo({
      ...info, Category: e.target.value
    })
  }

  function HandleOnChangInputphone(e) {
    setInfo({
      ...info, phonenumber: e.target.value
    })
  }

  function HandleOnChangInputemail(e) {
    setInfo({
      ...info, email: e.target.value
    })
  }
  
  return (
    <div className=' bg-slate-50 border-4 rounded-2xl test16'>
      <h1>{info?.name}</h1>
      <div className='flex'>
        <p>ประเภทงาน</p>
        <select className='ml-4 border-2 rounded-md p-1' onChange={HandleOnChangSelect}>
          <option value={info?.Category}>{info?.Category}</option>
          <option value='จิตกรรม'>จิตกรรม</option>
          <option value='งานศิลปะ'>งานศิลปะ</option>
          <option value='ภาพถ่าย'>ภาพถ่าย</option>
        </select>
      </div>
      <p>เจ้าของผลงาน</p>
      <div className='md:flex justify-self-auto'>
        <div >
          <label>ชื่อ <span className=' text-red-600'>*</span></label><br />
          <input type='text' value={info?.nameowner} onChange={HandleOnChangInputname} className='m-1 border-2 rounded-md p-1' />
          <small className=' text-red-600' id='name'></small>
        </div>
        <div className='md:ml-36'>
          <label>เบอร์ <span className=' text-red-600'>*</span></label><br />
          <input type='text' value={info?.phonenumber} onChange={HandleOnChangInputphone} className='m-1 border-2 rounded-md p-1' />
          <small className=' text-red-600' id='phone'></small>
        </div>
      </div>
      <div>
        <label>อีเมล <span className=' text-red-600'>*</span></label><br />
        <input type='text' value={info?.email} onChange={HandleOnChangInputemail} className='m-1 border-2 rounded-md p-1' />
        <small className=' text-red-600' id='email'></small>
      </div>
    </div>


  )
}

export default CardInfoCopyRight