import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../../App'

function Tablelist({ newData }) {
    const { selected, setSelected } = useContext(Context);

    // เช็ก state ที่เลือกปัจจุบัน
    useEffect(() => {
        console.log(selected)
    }, [selected])

    // ตอนคลิ๊กให้เก็บ statate ที่เลือก
    function HandleOnchangeCheckBox(data) {
        data.Status = !data.Status
        setSelected([...selected, { ...data }])
        if (!data.Status) {
            const NewData = selected.filter((item) => item.id !== data.id)
            setSelected(NewData)
        }
    }

    return (
        <table className='w-11/12 rounded-2xl text-center m-auto mt-4 mb-4 bg-slate-50'>
            <div className='p-5  flex'>
                <p>ค้นหา</p> <input className='ml-4' placeholder='ชื่อผลงาน'></input>
            </div>
            <tbody className='p-5'>
                <tr>
                    <th className='w-2'></th>
                    <th>ชื่อผลงาน</th>
                    <th>ประเภทผลงาน</th>
                    <th>วันที่แสดง</th>
                    <th>วันที่สิ้นสุด</th>
                    <th>สถานะ</th>

                </tr>
                {newData.map((data) => (
                    <>
                        <tr key={data.id}>
                            <td className='w-2'>
                                <input type='checkbox' onChange={() => HandleOnchangeCheckBox(data)} />
                            </td>
                            <td className='p-3 '>{data.id}.) {data.name}</td>
                            <td className='p-3 '>{data.Category}</td>
                            <td className='p-3 '>{data.dateStart}</td>
                            <td className='p-3 '>{data.dateEnd}</td>
                            <td className='p-3 '>{data.Status ? <>แสดง</> : <>ไม่แสดง</>}</td>
                            <td className='p-3 '><Link to='/detail' >ลายละเอียด</Link></td>
                        </tr>
                    </>
                ))}
            </tbody>
        </table>
    )
}

export default Tablelist