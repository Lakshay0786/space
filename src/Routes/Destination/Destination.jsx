import React from 'react'

import { Link, Outlet } from 'react-router-dom';
function Destination() {

  return (

    <div>
      <div className="bg-[url('/src/assets/destination/background-destination-desktop.jpg')]  h-screen bg-no-repeat bg-cover flex  flex-col  ">

        <div className=' p-6 h-fit w-10/12 flex space-x-12  justify-between  mx-auto mt-48'>
          <h1 className='text-white text-2xl'> 01 pick Your Destination</h1>
          <div>
            <Link className='p-2 mx-8 hover:border-b-2 ' to='/destination/earth'>MOON</Link>
            <Link className='p-2 mx-8 hover:border-b-2 ' to='/destination/moon'>MARS</Link>
            <Link className='p-2 mx-8 hover:border-b-2 ' to='/destination/europe'>EUROPA</Link>
            <Link className='p-2 mx-8 hover:border-b-2 ' to='/destination/titan'>TITAN</Link>
          </div>

        </div>


        <Outlet>
        </Outlet>

      </div>
    </div >

  )
}

export default Destination
