import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from '../../assets/shared/logo.svg'
function Navigation() {
    return (
        <>
            <div className='absolute border-b w-4/12 top-20 left-60 z-10 nav2'></div>
            <div className=' absolute  w-screen mt-9 flex flex-row justify-between	 '>
                <img className='ml-8  h-14 relative top-4 ' src={logo} alt='logo' />


                <div className='container h-24 w-7/12 flex justify-around align-center items-center	'>
                    <Link className=' ml-40 text-white hover:border-b-2 py-8' to='/home'>00 Home</Link>
                    <Link className=' text-white hover:border-b-2 py-8' to='/destination'>02 Destination</Link>
                    <Link className=' text-white hover:border-b-2 py-8' to='/crew'>03 Crew</Link>
                    <Link className=' text-white hover:border-b-2 py-8 mr-40' to='/technology'>04 Technology</Link>

                </div>

            </div>
            <Outlet></Outlet>
        </>
    )
}

export default Navigation

