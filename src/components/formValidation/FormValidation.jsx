import React, { useState } from 'react'

function FormValidation() {
    const [formData, setFormData] = useState({name:'', email:'', password:'', contact:''});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form submitted:', formData);
        const validateErrors = validateForm();
        setErrors(validateErrors);

        if (Object.keys(validateErrors).length === 0) {
            console.log('Form submitted successfully:', formData);
            setFormData({name:'', email:'',password:'', contact:''})
        } else {
            console.error('Validation errors:', validateErrors);
            return;
        }
    }

    // Add validation logic here
    const validateForm = () => {
        // const errors = {};
        // if (!formData.name) {
        //     errors.name = 'Name is required';
        // }
        // if (!formData.email) {
        //     errors.email = 'Email is required';
        // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        //     errors.email = 'Email is invalid';
        // }
        // if (!formData.password) {
        //     errors.password = 'Password is required';
        // } else if (formData.password.length < 6) {
        //     errors.password = 'Password must be at least 6 characters';
        // }
        // if (!formData.contact) {
        //     errors.contact = 'Contact is required';
        // } else if (!/^\d+$/.test(formData.contact)) {
        //     errors.contact = 'Contact must be numeric';
        // }
        // return errors;

        const errors={};
        if(!formData.name){
            errors.name = 'Name is required';
        }
        if(!formData.email){
            errors.email = 'Email is required';
        } else if(!/\S+@\S+\.\S+/.test(formData.email)){
            errors.email = 'Email is Invalid';
        }
        if(!formData.password){
            errors.password = 'Password is required';
        }else if(formData.password.length < 6){
            errors.password = 'Password must be at least 6 characters';
        }
        if(!formData.contact){
            errors.contact = 'Contact is required';
        }
        return errors;
    }

  return (
    <div>
        <h3>Form Validation</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type='text' name='name' placeholder='Enter Name' value={formData.name} onChange={handleChange}/>
                {errors.name && <p style={{color:'red'}}>{errors.name}</p>}
            </div>
            <div>
                <label>Email</label>
                <input type='email' name='email' placeholder='Enter Email' value={formData.email} onChange={handleChange}/>
                {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            </div>
            <div>
                <label>Password</label>
                <input type='password' name='password' placeholder='Enter Password' value={formData.password} onChange={handleChange}/>
                {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            </div>
            <div>
                <label>Contact</label>
                <input type='text' name='contact' placeholder='Enter Contact' value={formData.contact} onChange={handleChange}/>
                {errors.contact && <p style={{color:'red'}}>{errors.contact}</p>}
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidation;