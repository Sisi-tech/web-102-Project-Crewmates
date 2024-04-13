import React, { useState } from 'react';
import green from "../assets/green.png";
import CrewmateImages from '../component/CrewmateImages';


const CreatePost = () => {
    const [post, setPost] = useState({name: "", speed: "", color: ""})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
       
    };

    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h2 className='text-center text-5xl'>Create a new Crewmate</h2>
            <img src={green} alt="green" className='w-[200px]' />
            <form className='flex flex-col gap-8 justify-center items-center'>
                <div className='flex gap-8'>
                    <div className='flex gap-8'>
                        <div className='flex flex-col bg-gray-800 h-[200px] rounded-xl p-14 gap-6 text-xl shadow-lg'>
                            <label htmlFor='name' name="name" className='text-2xl'>Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Enter crewmate name" 
                                value={post.name}  
                                onChange={handleChange}
                                className="p-1 pl-2 rounded-lg"
                            />
                        </div>
                        <div className='flex flex-col bg-gray-800 h-[200px] rounded-xl p-14 gap-6 text-xl shadow-lg'>
                            <label htmlFor='speed' name="speed" className='text-2xl'>Speed (mph):</label>
                            <input 
                                type="text" 
                                id="speed" 
                                placeholder="Enter speed in mph" 
                                value={post.speed}  
                                onChange={handleChange}
                                className="p-1 pl-2 rounded-lg"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col bg-gray-800 rounded-xl p-14 gap-6 text-xl shadow-lg'>
                        <label htmlFor='color' name="color" className='text-2xl'>Color:</label>
                        <div className='flex flex-col'>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="red" 
                                    checked={post.color === "Red"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>Red</span>
                            </label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="green" 
                                    checked={post.color === "Green"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>Green</span>
                            </label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="blue" 
                                    checked={post.color === "Blue"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>Blue</span>
                            </label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="pink" 
                                    checked={post.color === "Pink"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>Pink</span>
                            </label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="yellow" 
                                    checked={post.color === "Yellow"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>Yellow</span>
                            </label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="purple" 
                                    checked={post.color === "Purple"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>Purple</span>
                            </label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="white" 
                                    checked={post.color === "White"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>White</span>
                            </label>
                        </div>
                    </div>
                </div>
                <button type="button" className='bg-gray-50 text-black w-[200px] p-2 rounded-full shadow-md'>
                    Create Crewmate
                </button>
            </form>
        </div>
    )
};

export default CreatePost;