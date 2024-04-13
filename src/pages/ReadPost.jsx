import React, { useState, useEffect } from "react";
import Card from "../component/Card";

const ReadPost = (props) => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        setPosts(props.data);
    }, [props]);

    return (
        <div>
            {
                posts && posts.length > 0 ?
                posts.map((post, index) => 
                    <Card index={post.index} name={post.name} speed={post.speed} color={post.color} />
                ) : <h2 className="text-4xl">No Crewmate yet 😞</h2>
            }
        </div>
    )
};

export default ReadPost; 