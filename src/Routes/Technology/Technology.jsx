import React, { useState, useEffect } from 'react'
import data from '../../data'
import photo1 from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import photo2 from '../../assets/technology/image-space-capsule-landscape.jpg'
import photo3 from '../../assets/technology/image-spaceport-landscape.jpg'
function Technology() {
    const [name, setName] = useState("")
    const [description, setdescription] = useState("")
    const [photo, setPhoto] = useState("")

    useEffect(() => {
        setdescription(data.technology[0].description)
        setName(data.technology[0].name)
        setPhoto(photo1)
    }, [])
    const first = () => {
        setName(data.technology[0].name);
        setPhoto(photo1)
        setdescription(data.technology[0].description);
    }

    const second = () => {
        setName(data.technology[1].name);
        setPhoto(photo2)
        setdescription(data.technology[1].description);
    }

    const third = () => {
        setName(data.technology[2].name);
        setPhoto(photo3)
        setdescription(data.technology[2].description);
    }


    return (
        <div className="bg-[url('/src/assets/technology/background-technology-desktop.jpg')]  h-screen bg-no-repeat bg-cover">
            <div className='w-10/12 mx-auto flex pt-60'>
                <div className='w-7/12'>

                    <h1 className='text-4xl mb-10'>03 SPACE LAUNCH 101</h1>
                    <div className='flex h-96 '>
                        <div className='w-2/12 py-12 flex flex-col justify-around'>
                            <div onClick={first} className='h-14 w-14 rounded-full bg-white hover:bg-black hover:text-white text-black flex justify-center items-center text-2xl '>1</div>
                            <div onClick={second} className='h-14 w-14 rounded-full bg-white hover:text-white  hover:bg-black text-black flex justify-center items-center text-2xl o'>2</div>
                            <div onClick={third} className='h-14 w-14 rounded-full bg-white hover:bg-black hover:text-white text-black flex justify-center items-center text-2xl '>3</div>
                        </div>
                        <div className='ml-20'>
                            <p className='mt-10 text-3xl'>THE TERMINOLOGY ...</p>
                            <h1 className='mt-10 text-8xl'>{name}</h1>
                            <p className='mt-10 w-10/12'>{description}</p>
                        </div>

                    </div>
                </div>
                <div className='w-8/12'>
                    <img className='absolute right-0 bottom-20' src={photo} alt='night' />
                </div>
            </div>

        </div>

    )
}

export default Technology