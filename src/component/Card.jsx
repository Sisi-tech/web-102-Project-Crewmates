import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className='bg-gray-800 p-10 rounded-xl'>
            <img src="" alt="pic" />
            <p>Name of Crewmate: {props.name}</p>
            <p>Speed of Crewmate: {props.speed}</p>
            <p>Color of Crewmate: {props.color}</p>
            <button type="button" className='bg-gray-50 rounded-xl p-1'>Edit Crewmate</button>
        </div>
    )
};

export default Card; 