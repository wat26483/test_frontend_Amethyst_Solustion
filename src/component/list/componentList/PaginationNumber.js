import React from 'react'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { TbPlayerTrackNext } from "react-icons/tb";
import { TbPlayerTrackPrev } from "react-icons/tb";
function PaginationNumber({ setRecordsPerPage, recordsPerPage, currentPage, setCurrentPage,data }) {

    const Page = Math.ceil(data.length / recordsPerPage) // หาจำนวนหน้าของข้อมูลทั้งหมด
    const pageNumbers = [...Array(Page + 1).keys()].slice(1) // เอาจำนวนของหน้ามาเป็น array  
    const PageSize = ['5', '3', '10']  // จำนวนที่จะแสดงต่อหน้า   

    // จัดการตอนที่คลิ๊กเลื่อนก่อนหน้า
    function HandleOnPrev(){
        if(currentPage === 1){
            return
        }
        setCurrentPage(currentPage - 1)
    }
    // จัดการตอนที่คลิ๊กเลื่อนหน้าถัดไป
    function HandleOnNext(){
        if(currentPage === Page){
            return
        }
        setCurrentPage(currentPage + 1)
    }
    return (
        <div className='flex justify-between'>
            <div className='md:p-2'>
                Page Size
                <select className='hover:cursor-pointer' onChange={(e) => setRecordsPerPage(e.target.value)}>
                    {
                        PageSize.map((Value) => (
                            <option value={Value}>  {Value}</option>
                        ))
                    }
                </select>
            </div>
            <div className='flex w-11/12 md:w-1/5 md:p-2 items-center sm:justify-around cursor-pointer justify-between'>
                <TbPlayerTrackPrev/>
                <div onClick={HandleOnPrev} className='hover:cursor-pointer' >
                    <GrPrevious/> 
                </div>
                {
                    pageNumbers.map((number) => (
                        <div className='hover:cursor-pointer none sm:block' key={number} onClick={() => { setCurrentPage(number) }}>
                            {number}
                        </div>
                    ))
                }
                
                <div onClick={HandleOnNext} className='hover:cursor-pointer' >
                    <GrNext/>
                </div>
                <TbPlayerTrackNext/>
            </div>
        </div>
    )
}

export default PaginationNumber