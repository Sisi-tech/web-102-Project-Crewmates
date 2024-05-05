import React from 'react';
import CrewmateImages from './CrewmateImages';

const Home = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center pt-20 p-2 text-gray-50'>
            <h1 className='md:text-5xl sm:text-3xl pb-8'>Welcome to the Crewmate Creator!</h1>
            <p className='md:text-xl sm:text-md'>Here is where you can create your very own set of crewmates before sending them off into space!</p>
            <CrewmateImages />
        </div>
    )
}

export default Home;
