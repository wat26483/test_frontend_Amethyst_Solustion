import React from 'react'

function Header() {
  return (
    <div className=' w-full  h-20 text-white'>
      <div className='flex p-4  justify-between w-3/2' >
        <div className='flex'>
          <h1 className='md:pl-5 md:pr-5'>LOGO</h1>
          <p className='pl-5'>Test Front-End (Amethyst Solustion)</p>
        </div>
        <p>Patiwat Kannalas</p>
      </div><hr/>
    </div>
  )
}

export default Header