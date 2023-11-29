import React, { useState } from 'react'
import Header from '../component/Header/Header'
import List from '../component/list/List'

function Home() {

    return (
        <div className='bg-blue-900 h-screen ' >
            <Header />
            <div className=' bg-slate-300 text-black m-auto w-11/12 p-5 rounded-2xl mt-7'>
                <p>หน้าหลัก</p>
                <p>รายการผลงาน</p>
                <List />
            </div>
        </div>
    )
}

export default Home