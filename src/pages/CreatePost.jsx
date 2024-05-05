import React, { useState } from 'react';
import green from "../assets/green.png";
import { supabase } from '../client';

const CreatePost = () => {
    const [post, setPost] = useState({name: "", speed: "", color: ""});

    const createPost = async (e) => {
        e.preventDefault();
        await supabase
            .from('Crewmate')
            .insert({name: post.name, speed: post.speed, color: post.color});

        window.location = "/";
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className='w-full h-full pt-2 flex flex-col gap-4 justify-center items-center'>
            <h2 className='text-center md:text-5xl sm:text-3xl'>Create a new Crewmate</h2>
            <img src={green} alt="green" className='w-[200px]' />
            <form className='flex flex-col gap-8 justify-center items-center'>
                <div className='flex md:gap-8 sm:gap-4 sm:flex-col md:flex-row'>
                    <div className='flex md:gap-8 sm:gap-4 md:flex-row sm:flex-col'>
                        <div className='flex flex-col bg-gray-800 h-[200px] rounded-xl p-14 gap-6 text-xl shadow-lg'>
                            <label htmlFor='name' className='text-2xl'>Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Enter crewmate name" 
                                value={post.name}  
                                onChange={handleChange}
                                className="p-1 pl-2 rounded-lg text-black"
                            />
                        </div>
                        <div className='flex flex-col bg-gray-800 h-[200px] rounded-xl p-14 gap-6 text-xl shadow-lg'>
                            <label htmlFor='speed' className='text-2xl'>Speed (mph):</label>
                            <input 
                                type="text" 
                                id="speed" 
                                name="speed" 
                                placeholder="Enter speed in mph" 
                                value={post.speed}  
                                onChange={handleChange}
                                className="p-1 pl-2 rounded-lg text-black"
                            />
                        </div>
                    </div>
                    <div className='flex flex-col bg-gray-800 rounded-xl p-14 gap-2 text-xl shadow-lg'>
                        <label className='text-2xl'>Color:</label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="red" 
                                    checked={post.color === "red"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>Red</span>
                            </label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="green" 
                                    checked={post.color === "green"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>Green</span>
                            </label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="blue" 
                                    checked={post.color === "blue"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>Blue</span>
                            </label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="pink" 
                                    checked={post.color === "pink"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>Pink</span>
                            </label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="yellow" 
                                    checked={post.color === "yellow"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>Yellow</span>
                            </label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="purple" 
                                    checked={post.color === "purple"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>Purple</span>
                            </label>
                            <label className='inline-fle items-center'>
                                <input 
                                    type="radio" 
                                    name="color" 
                                    value="white" 
                                    checked={post.color === "white"} 
                                    onChange={handleChange} 
                                />
                                <span className='ml-2'>White</span>
                            </label>
                    </div>
                </div>
                <button 
                    type="button" 
                    className='bg-gray-50 text-black w-[200px] p-2 rounded-full shadow-md'
                    onClick={createPost}
                >
                    Create Crewmate
                </button>
            </form>
        </div>
    )
};

export default CreatePost;
