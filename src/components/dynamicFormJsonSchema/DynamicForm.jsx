import React, { useState } from 'react'

function DynamicForm({schema, onSubmit}) {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
    };

    const renderField = (field) =>{
        switch(field.type){
            case 'text':
            case 'email':
            case 'tel':
                return (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.name}</label>
                        <input 
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                        />
                    </div>
                );
            case 'checkbox':
                return (
                    <div key={field.name}>
                        <label>
                        <input 
                        type='checkbox'
                        name={field.name}
                        checked={formData[field.name] || false}
                        onChange={handleChange}
                        required={field.required}
                        />
                        {field.label}
                        </label>
                    </div>
                );
            case 'number':
                return (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.name}</label>
                        <input 
                        type='number'
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                        />
                    </div>
                );
            case 'textarea':
                return (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <textarea 
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                        />
                    </div>
                );
            case 'select':
                return (
                    <div key={field.name}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <select 
                        name={field.name}
                        id={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                        >
                            <option value=''>Select an option</option>
                            {field.options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>
                );
            default:
                return null;
        }
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            {schema.fields.map((field) => renderField(field))}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default DynamicForm;