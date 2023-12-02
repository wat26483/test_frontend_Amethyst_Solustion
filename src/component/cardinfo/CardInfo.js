import React from 'react'

function CardInfo({ info, setInfo }) {


  // เก็บ state สำรองใว้ก่อน update
  function HandleOnChangDetail(e) {
    setInfo({
      ...info, Detail: e.target.value
    })
  }

  function HandleOnChamgDateEnd(e) {
    setInfo({
      ...info, dateEnd: e.target.value
    })
  }

  function HandleOnChangDateStart(e) {
    setInfo({
      ...info, dateStart: e.target.value
    })
  }

  function HandleOnChangShowDate(e) {
    const Eventonchange = e.target.value
    if (Eventonchange === 'true') {
      setInfo({
        ...info, statusShowDate: true
      })
    } else {
      setInfo({
        ...info, statusShowDate: false
      })
    }
  }

  function HandleOnChangShowDateEnd() {
    setInfo({
      ...info, statusShowDateEnd: !info.statusShowDateEnd
    })
  }

  return (

    <div className='bg-slate-50 border-4 rounded-2xl test16 mt-2 mb-10'>
      <h1 className='border-b-2 pb-2'>ข้อมูลงาน</h1>
      <div className='test md:flex lg:justify-between'>
        <div>
          <p>ระยะเวลาการแสดงผลงานให้ผู้อื่นเห็น</p>
          <form className='flex md:justify-between lg:m-auto md:w-9/12  lg:w-10/12'>
            <label ><input type='radio' value='true' name="dateshow" checked={info?.statusShowDate} onChange={HandleOnChangShowDate} />แสดง</label>
            <label><input type='radio' value='false' name="dateshow" checked={!info?.statusShowDate} onChange={HandleOnChangShowDate} />ไม่แสดง</label>
          </form>
        </div>
        <div>
          <label>วันที่เริ่มต้น</label><br />
          <input type="date" className='lg:w-56 border-2 rounded-md bg-slate-50' min="2023-12-01" max={info?.dateEnd} value={info?.dateStart} onChange={HandleOnChangDateStart} /><br />
          <small>ตัวอย่าง: 01/01/2024</small>
        </div>
        <div className='flex flex-col-reverse'>
          <div className='m-2'>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked={info?.statusShowDateEnd} onChange={HandleOnChangShowDateEnd} class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div>
            <label>วันที่สิ้นสุด</label><br />
            <input type="date" className='lg:w-56 border-2 rounded-md bg-slate-50' min={info?.dateStart} max="2024-12-31" value={info?.statusShowDateEnd ? info?.dateEnd : '-'} onChange={HandleOnChamgDateEnd} /><br />
            <small>ตัวอย่าง: 01/01/2024</small>
          </div>
        </div>
      </div>
      <div>
        <label>รายละเอียด</label><br />
        <textarea rows="4" className='border-2 w-full rounded-md bg-slate-50 overflow-hidden p-2 resize-none' cols="70" value={info?.Detail} onChange={HandleOnChangDetail}></textarea>
      </div>
    </div>
  )
}

export default CardInfo