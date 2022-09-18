import React from 'react'

function Home() {
    return (
        <div className="bg-[url('/src/assets/home/background-home-desktop.jpg')]  h-screen bg-no-repeat bg-cover">
            <div className='absolute w-5/12 ml-20 top-80'  >
                <p className='text-white mb-2 text-2xl'>So, you want to travel to </p>
                <h1 className='text-white text-9xl mb-4'>Space</h1>  <p className='text-white mt-10 w-10/12'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore</p>
            </div>
            <div className='absolute w-80 h-80 rounded-full top-2/4 left-3/4 bg-white flex justify-center '><h1 className='text-black py-36 text-3xl'>Explore</h1></div>
        </div >

    )
}

export default Home;