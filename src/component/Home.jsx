import React from 'react';
import blue from "../assets/blue.png";
import green from "../assets/green.png";
import pink from "../assets/pink.png";
import purple from "../assets/purple.png";
import red from "../assets/red.png";

const Home = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-20 p-2 text-gray-50'>
            <h1 className='text-4xl pb-8'>Welcome to the Crewmate Creator!</h1>
            <p className='text-xl'>Here is where you can create your very own set of crewmates before sending them off into space!</p>
            <div className='flex flex-col sm:flex-row  gap-0 m-0 pt-20'>
                <img src={blue} className="w-[180px]" />
                <img src={red} className="w-[160px]" />
                <img src={green} className="w-[240px]" />
                <img src={pink} className="w-[220px]" />
                <img src={purple} className="w-[160px]" />
            </div>
        </div>
    )
}

export default Home;
