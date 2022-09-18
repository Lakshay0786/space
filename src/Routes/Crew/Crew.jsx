import React, { useState, useEffect } from 'react'
import data from '../../data'
import photo1 from '../../assets/crew/image-anousheh-ansari.png'

import photo2 from '../../assets/crew/image-douglas-hurley.png'

import photo3 from '../../assets/crew/image-mark-shuttleworth.png'

import photo4 from '../../assets/crew/image-victor-glover.png'


function Crew() {
    const [role, setRole] = useState("")
    const [bio, setBio] = useState("")
    const [photo, setPhoto] = useState("")

    const [name, setName] = useState("")
    useEffect(() => {
        setPhoto(photo1)
        setRole(data.crew[0].role);
        setName(data.crew[0].name);
        setBio(data.crew[0].bio);

    }, []);
    const first = () => {
        setRole(data.crew[0].role);
        setPhoto(photo1)
        setName(data.crew[0].name);
        setBio(data.crew[0].bio);
    }

    const second = () => {
        setRole(data.crew[1].role);
        setName(data.crew[1].name);
        setBio(data.crew[1].bio);
        setPhoto(photo2)
    }

    const third = () => {
        setRole(data.crew[2].role);
        setName(data.crew[2].name);
        setPhoto(photo3)
        setBio(data.crew[2].bio);
    }

    const fourth = () => {
        setRole(data.crew[3].role);
        setName(data.crew[3].name);
        setBio(data.crew[3].bio);
        setPhoto(photo4)
    }
    return (
        <div className="bg-[url('/src/assets/crew/background-crew-desktop.jpg')]  h-screen bg-no-repeat bg-cover " >
            <div className='flex w-10/12 mx-auto pt-40'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl'> 02 MEET YOUR CREW</h1>
                    <p className='mt-10'>{role}</p>
                    <h1 className='text-8xl mt-10 '>{name}</h1>
                    <p className='w-6/12 mt-10'>{bio}</p>
                    <div className='flex justify-around w-2/12 mt-60'>
                        <div onClick={first} className='h-4 w-4 rounded-full bg-white hover:bg-black'></div>
                        <div onClick={second} className='h-4 w-4 rounded-full bg-white hover:bg-black'></div>
                        <div onClick={third} className='h-4 w-4 rounded-full bg-white hover:bg-black'></div>
                        <div onClick={fourth} className='h-4 w-4 rounded-full bg-white hover:bg-black'></div>
                    </div>
                </div>
                <div className='w-8/12'>
                    <img className='absolute  bottom-0 mt-2' src={photo} alt="Hello" />
                </div>

            </div>


        </div>

    )
}

export default Crew