import React, { useContext, useState } from 'react'
import { Context } from '../../App';
import { FaArrowLeft } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
function DetailCard({ numberSelect }) {
  const { selected } = useContext(Context);
  const [readMore, setReadMore] = useState(50);

  let SelectedData = selected[numberSelect]

  
  // จัดการเมื่อกดอ่านเพิ่มเติม
  function OnClickReadMore() {
    readMore === 50 ? setReadMore(SelectedData.Detail.length) : setReadMore(50)
  }

  return (
    <div className='h-full xl:w-1/3 w-full lg:w-1/3 mb-32 md:w-2/3 p-4 bg-zinc-50 rounded-xl sm:mb-6 '>
      <div className='test'>
        <div className='flex justify-between'>
          <h1>{SelectedData?.name}</h1>
          <div>
            <Link to='/'><button className='rounded-full border-2 border-slate-300 p-2 m-1'><FaArrowLeft  color='#0766AD'/></button></Link>
            <Link to={`/edit/${SelectedData?.id}`}><button className='rounded-full border-2 border-slate-300 p-2 m-1'><FaRegEdit color='#0766AD'/></button></Link>
          </div>
        </div>
        <p>ประเภทงาน : {SelectedData?.Category}</p>
        <p>วันที่เริ่มต้น :{SelectedData?.statusShowDate ? new Date(SelectedData?.dateStart).toLocaleDateString('en-GB'): "-"}</p>
        <p>วันที่สิ้นสุด : {SelectedData?.statusShowDate ? (SelectedData?.statusShowDateEnd ? new Date(SelectedData?.dateEnd).toLocaleDateString('en-GB') : '-') : "-"}</p>
        <p>เจ้าของลิขสิทธ์</p>
        <div className=' border-2 border-slate-300 p-3 rounded-t-lg m-1'> 
          <h1>{SelectedData?.nameowner}</h1>
          <p className='pt-2'>เบอร์โทร : {SelectedData?.phonenumber}</p>
          <p>อีเมล  :{SelectedData?.email}</p>
        </div>
        <div className='w-full'>
          <h1>รายละเอียด</h1>
          <p>สามารถติดต่อเพิ่มเติมได้ที่ {SelectedData?.email}
            {SelectedData?.Detail.slice(0, readMore)}<span className=' text-cyan-500 cursor-pointer ' onClick={OnClickReadMore}>{readMore === 50 ? '...อ่านเพิ่มเติม' : '   อ่านน้อยลง'}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailCard