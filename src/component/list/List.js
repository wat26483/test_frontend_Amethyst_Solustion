import React, { useEffect, useMemo, useState } from 'react'
import { Datas } from '../../Datas'
import Tablelist from './componentList/Tablelist';
import PaginationNumber from './componentList/PaginationNumber';
function List() {
    const [currentPage, setCurrentPage] = useState(1); // หน้าปัจุบัน
    const [recordsPerPage, setRecordsPerPage] = useState(5); // จำนวณข้อมูลทีจะแสดง 
    const indexOfLastRecord = currentPage * recordsPerPage; // หา index แรกของข้อมูล
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; // หา index สุดท้ายของข้อมูล
    const newData = Datas.slice(indexOfFirstRecord, indexOfLastRecord);// ตัดแบ่งข้อมูล
    return (
        <>
            <Tablelist newData={newData} />
            <PaginationNumber
                setRecordsPerPage={setRecordsPerPage}
                recordsPerPage={recordsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
        </>
    )
}

export default List