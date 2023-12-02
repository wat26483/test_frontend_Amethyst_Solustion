import React, { useState,useContext } from 'react'
import { Context } from '../../App';
import Tablelist from './componentList/Tablelist';
import PaginationNumber from './componentList/PaginationNumber';
function List() {
    const { data,setData } = useContext(Context);
    const [currentPage, setCurrentPage] = useState(1); // หน้าปัจุบัน
    const [recordsPerPage, setRecordsPerPage] = useState(5); // จำนวณข้อมูลทีจะแสดง
    const indexOfLastRecord = currentPage * recordsPerPage; // หา index แรกของข้อมูล
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; // หา index สุดท้ายของข้อมูล
    const newData = data.slice(indexOfFirstRecord, indexOfLastRecord);// ตัดแบ่งข้อมูล

    return (
        <>
            <Tablelist newData={newData}/>
            <PaginationNumber
                setRecordsPerPage={setRecordsPerPage}
                recordsPerPage={recordsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                data={data} />
        </>
    )
}

export default List