import React from 'react'
import { Datas } from '../../../Datas'
function PaginationNumber({ setRecordsPerPage, recordsPerPage, currentPage, setCurrentPage }) {

    const Page = Math.ceil(Datas.length / recordsPerPage) // หาจำนวนหน้าของข้อมูลทั้งหมด
    const pageNumbers = [...Array(Page + 1).keys()].slice(1) // เอาจำนวนของหน้ามาเป็น array  
    const PageSize = ['5', '3', '10']  // จำนวนที่จะแสดงต่อหน้า   

    return (
        <div className='flex justify-between'>
            <div>
                Page Size
                <select className='hover:cursor-pointer' onChange={(e) => setRecordsPerPage(e.target.value)}>
                    {
                        PageSize.map((Value) => (
                            <option value={Value}>  {Value}</option>
                        ))
                    }
                </select>
            </div>
            <div className='flex w-1/5 justify-around'>
                <div onClick={() => setCurrentPage(currentPage - 1)} className='hover:cursor-pointer' >
                    ก่อนหน้า
                </div>
                {
                    pageNumbers.map((number) => (
                        <div className='hover:cursor-pointer' key={number} onClick={() => { setCurrentPage(number) }}>
                            {number}
                        </div>
                    ))
                }
                <div onClick={() => setCurrentPage(currentPage + 1)} className='hover:cursor-pointer' >
                    ถัดไป
                </div>
            </div>
        </div>
    )
}

export default PaginationNumber