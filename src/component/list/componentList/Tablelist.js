import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../../App'
import { MdOutlineDeleteForever } from "react-icons/md";
import { TfiCheckBox } from "react-icons/tfi";
import { FaRegWindowClose } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Datas } from '../../../Datas';
import { FiRefreshCw } from "react-icons/fi";
function Tablelist({ newData }) {
    const { setData, data, selected } = useContext(Context);
    const [search, setSearch] = useState('')
    // ตอนคลิ๊กให้เก็บ statate ที่เลือก
    function HandleOnchangeCheckBox(id) {
        const NewDataOnclick = data.map((prevdata) => {
            if (prevdata.id === id) {
                return {
                    ...prevdata, Status: !prevdata.Status
                }
            } else {
                return prevdata
            }
        })

       return setData(NewDataOnclick)

    }
    // จัดการ state ตอนลบ
    function HandleOnClickDelete() {
        const NewDataOnDelete = data.filter((data) => data.Status === false)
        setData(NewDataOnDelete)
    }
    // search ข้อมูล
    function HandleOnClickSearch() {
        const searchdata = data.filter(item => search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search))
        setData(searchdata);
        setSearch('');
    }
    // เก็บ state ตอนพิม
    function HandleOnSearch(e) {
        setSearch(e.target.value)
    }

    // รีเฟช ข้อมูล
    function HandleOnclickRefresh() {
        setSearch('');
        setData(Datas);
    }

    return (
        <>
            <div className=' w-full justify-between  p-2 sm:m-auto sm:p-3 sm:w-full flex sm:items-center sm:justify-between rounded-t-lg  bg-slate-50 md:h-12'>
                <div className='sm:inline-flex flex md:flex md:items-center md:w-6/12'>
                    <p className='none sm:block'>ค้นหา</p> <input className='ml-4 border-2 w-10/12 rounded-lg border-slate-500 p-1' value={search} onChange={HandleOnSearch} placeholder='ชื่อผลงาน'></input>
                    <div className='p-2 sm:p-3 ml-2 flex items-center text-white rounded-lg bg-blue-900 cursor-pointer' onClick={HandleOnClickSearch} >
                        <FaSearch />
                    </div>
                    <div className='p-2 sm:p-3 ml-2 flex items-center text-white rounded-lg bg-blue-900 cursor-pointer' onClick={HandleOnclickRefresh} >
                        <FiRefreshCw />
                    </div>
                </div>
                <div >
                    <button className='flex items-center p-1 rounded-lg border-2 border-slate-200' onClick={HandleOnClickDelete}><MdOutlineDeleteForever size={30} /><p className='none sm:block'>Delete</p></button>
                </div>
            </div>
            <div className='overflow-x-auto'>
                <table className='w-full rounded-b-lg text-center m-auto bg-slate-50 sm:border-8 border-slate-50'>
                    <tbody className=' w-full'>
                        <tr className='w-full md:h-10 border-y-2'>
                            <th className='lg:w-2' ></th>
                            <th className='lg:pl-3 pl-1 sm:pl-2 md:pl-3 text-start'>ชื่อผลงาน</th>
                            <th>ประเภทผลงาน</th>
                            <th>วันที่แสดง</th>
                            <th>วันที่สิ้นสุด</th>
                            <th className='md:w-28'>สถานะ</th>
                            <th className=''></th>

                        </tr>
                        {newData.map((data) => (
                            <tr key={data.id} className='w-full hover:bg-slate-300'>
                                <td onChange={() => HandleOnchangeCheckBox(data.id)} className=' sm:w-12'>
                                    <input type='checkbox' className='h-full w-6 ' checked={data.Status} onChange={() => HandleOnchangeCheckBox(data.id)} />
                                </td>
                                <td onClick={() => HandleOnchangeCheckBox(data.id)} className='lg:p-3 p-1 sm:p-2 md:p-3 text-start'>{data.id}. {data.name}</td>
                                <td onClick={() => HandleOnchangeCheckBox(data.id)} className='lg:p-3 p-1 sm:p-2 md:p-3'>{data.Category}</td>
                                <td onClick={() => HandleOnchangeCheckBox(data.id)} className='lg:p-3 p-1 sm:p-2 md:p-3'>{data.statusShowDate ? new Date(data.dateStart).toLocaleDateString('en-GB') : '-'}</td>
                                <td onClick={() => HandleOnchangeCheckBox(data.id)} className='lg:p-3 p-1 sm:p-2 md:p-3'>{data.statusShowDate ? (data.statusShowDateEnd ? new Date(data.dateEnd).toLocaleDateString('en-GB') : '-') : '-'}</td>
                                <td onClick={() => HandleOnchangeCheckBox(data.id)} className='lg:p-3 p-1 sm:p-2 md:p-3 '>{data.Status ? <div className='flex items-center text-green-600 justify-between'><TfiCheckBox /><p>แสดง</p></div> : <div className='flex items-center text-red-600 justify-between'><FaRegWindowClose />ไม่แสดง</div>}</td>
                                <td className='lg:p-3 p-1 sm:p-2 md:p-3'>{
                                    selected.length === 0 ? <p className='cursor-not-allowed' onClick={() => alert('คุณไม่ได้เลือก')}> ลายละเอียด </p> : <Link to='/detail'><p>ลายละเอียด</p></Link>}</td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Tablelist