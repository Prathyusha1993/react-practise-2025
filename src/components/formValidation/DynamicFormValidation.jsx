import React, { useState } from 'react'

function DynamicFormValidation({ schema, onSubmit}) {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value, type,checked} = e.target;
        setFormData((prev) => ({...prev, [name]: type === 'checkbox' ? checked : value}))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        schema.fields.forEach((field) => {
            if(field.required && !formData[field.name]){
                newErrors[field.name] = `${field.label} is required`;
            }
        });
        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            return;
        }
        setErrors({});
        onSubmit(formData);
    }

    const renderFields = (field) => {
        switch(field.type) {
            case 'text':
            case 'email':
            case 'tel':
                return (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input 
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                        />
                        {errors[field.name] && (<p style={{color:'red'}}>{errors[field.name]}</p>)}
                    </div>
                );
            case 'checkbox':
                return (
                    <div key={field.name}>
                        <label>
                            <input 
                            type={field.type}
                            name={field.name}
                            value={!!formData[field.name]}
                            onChange={handleChange}
                            required={field.required} />
                            {field.label}
                        </label>
                        {errors[field.name] && (<p style={{color:'red'}}>{errors[field.name]}</p>)}
                    </div>
                );
            case 'number':
                return (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.name}</label>
                        <input 
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || '' }
                        onChange={handleChange}
                        required={field.required}/>
                        {errors[field.name] && (<p style={{color:'red'}}>{errors[field.name]}</p>)}
                    </div>
                );
            case 'textarea':
                return (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.name}</label>
                        <textarea 
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required} />
                        {errors[field.name] && (<p style={{color:'red'}}>{errors[field.name]}</p>)}
                    </div>
                );
            case 'select':
                return (
                    <div key={field.name}>
                        <label>{field.name}</label>
                        <select 
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}>
                            <option>Select an Option</option>
                            {Array.isArray(field.options) && field.options.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                        {errors[field.name] && (<p style={{color:'red'}}>{errors[field.name]}</p>)}
                    </div>
                );
            default:
                return null;
        }
    }

    // console.log('schema', schema.fields);
  return (
    <div>
        <h3>Dynamic Form Validation</h3>
        <form onSubmit={handleSubmit}>
            {Array.isArray(schema?.fields) && schema.fields.map((field) => renderFields(field))}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default DynamicFormValidation;