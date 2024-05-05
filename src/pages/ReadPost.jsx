import React, { useState, useEffect } from "react";
import Card from "../component/Card";
import { supabase } from "../client";

const ReadPost = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase 
                    .from("Crewmate")
                    .select();
                if (error) {
                    throw error;
                }
                setPosts(data);
            } catch (error) {
                console.error("Error fetching posts: ", error.message);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className="w-full h-full pb-10 flex flex-col justify-center align-center text-center pt-16">
            <h2 className="md:text-5xl sm:text-3xl">Your Crewmate Gallery!</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 sm:gap-8 gap-4 pl-2 pt-20">
            {
                posts && posts.length > 0 ?
                posts.map((post) => 
                    <Card 
                        key={post.id} 
                        id={post.id}
                        name={post.name} 
                        speed={post.speed} 
                        color={post.color} 
                        
                    />
                ) : <h2 className="text-4xl">No Crewmate yet 😞</h2>
            }
        </div>
        </div>
    )
};

export default ReadPost; 