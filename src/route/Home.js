import React, { useState } from 'react'
import Header from '../component/Header/Header'
import List from '../component/list/List'

function Home() {

    return (
        <div className='bg-blue-900 sm:h-screen h-full ' >
            <Header />
            <div className='sm:w-9/12 lg:w-10/12 sm:m-auto'>
                <p className=' w-28 h-9 text-center m-auto sm:m-0 pt-2 mt-4 bg-slate-200 rounded-t-lg'>หน้าหลัก</p>
            </div>
            <div className=' bg-slate-200 text-black m-auto   sm:w-11/12 p-5 rounded-2xl '>
                <p className='sm:w-10/12 sm:text-left sm:mb-3 text-center'> รายการผลงาน</p>
                <List />
            </div>
        </div>
    )
}

export default Home