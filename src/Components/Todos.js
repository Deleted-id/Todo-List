import React from 'react'
import "./Todos.css";
import { useState } from 'react'

function Todos() {
    const [data, setData] = useState({
        title: '',
        desc: ''
    });



    const { title, desc } = data;

    const [savedData, setSavedData] = useState([]);

    const handleChange = (e) => {

        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.title || !data.desc) {
            alert("Please fill all fields");
            return;
        }
        setSavedData(prevSavedData => [...prevSavedData, data]);
        setData({ title: '', desc: '' });


    };
    return (
        <div>

            
            <form onSubmit={handleSubmit}>
                <label>Title</label><br />
                <input type='text' name='title' value={title} onChange={handleChange} placeholder='Wright your title' /><br />
                <lable>Description</lable><br />
                <input type='text' name='desc' value={desc} onChange={handleChange} placeholder='Write your description' /><br />
                <button type='submit'>Save</button>
            </form>

            <div className='saved'>
                <h2>My Choices</h2>
                {savedData.map((item, index) => (
                    <div key={index}>
                        <p>Title: {item.title}</p>
                        <p>Description: {item.desc}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Todos
