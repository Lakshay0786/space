import React from 'react'
import data from '../../data'

function Europe() {
    const name = data.destinations[2].name;
    const description = data.destinations[2].description;
    const time = data.destinations[2].travel
    const distance = data.destinations[2].distance;

    return (
        <div className='flex w-11/12 h-4/6 mx-auto mt-10'>

            <img className='w-12/12 mr-80' src={require("../../assets/destination/image-europa.png")} alt='moon' />
            <div className='w-5/12'>
                <h1 className='text-9xl mb-10'>{name}</h1>
                <p className='text-1xl w-8/12 '>{description}</p>
                <hr className='w-8/12 my-10 ' />
                <div className='flex justify-around w-8/12'>
                    <div>
                        <p>AVG DISTANCE.</p>
                        <h1 className='text-3xl'>{distance}</h1>
                    </div>
                    <div>
                        <p>EST. TRAVEL TIME</p>
                        <h1 className='text-3xl'>{time}</h1>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Europe