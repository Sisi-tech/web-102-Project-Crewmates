import React, {useState} from 'react';
import { useParams } from 'react-router-dom';

const EditPost = ({data}) => {
    const {id} = useParams();
    const [post, setPost] = useState({id: null, name: "", speed: "", color: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div>
            <form>
                <label htmlFor='name'>Name:</label>
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange}/><br />
                <br/>

                <label htmlFor='speed'>Speed:</label>
                <input type="text" id="speed" name="speed" value={post.speed} onChange={handleChange} /><br/>
                <br />

                <label htmlFor='color'>Color:</label>
                <input type="radio" id="color" name="color" value={post.color} onChange={handleChange} /><br />
                <br />
                <input type="submit" value="Submit" />
                <button className=''>Delete</button>
            </form>
        </div>
    );
}

export default EditPost; 