import React, { useState } from 'react';
import { Link } from "react-router-dom";
import green from "../assets/green.png";

const Card = (props) => {
    const { color } = props;
    return (     
        <div className='flex flex-col gap-2 justify-center items-center text-xl bg-gray-800 p-10 rounded-xl'
            style={{ boxShadow: `12px -12px 10px ${color}`}} >
            <img src={green} alt="pic" className='w-[140px]' />
            <p>Name of Crewmate: {props.name}</p>
            <p>Speed of Crewmate: {props.speed}</p>
            <p>Color of Crewmate: {props.color}</p>
            <button type="button" className='bg-gray-50 rounded-xl p-2 text-black text-md mt-4'>Edit Crewmate</button>
        </div>
    )
};

export default Card; 