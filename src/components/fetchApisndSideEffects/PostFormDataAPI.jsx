import React, { useState } from "react";

function PostFormDataAPI() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        if(!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        console.log('Response:', data);
    }catch(err){
        console.error('Error:', err);
    }finally{
        setLoading(false);
        setFormData({
            name: "",
            age: "",
            email: "",
            contact: "",
        });
    }
  }

  return (
    <div>
      <h2>Post FormData API</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name='age'
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter Age"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <label>Contact No.</label>
          <input
            type="number"
            name='contact'
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter Contact No."
            required
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default PostFormDataAPI;
