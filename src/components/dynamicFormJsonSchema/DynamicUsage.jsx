import React from 'react'
import DynamicForm from './DynamicForm';
import formDataSchema from './formDataSchema.json';

function DynamicUsage() {

    const handleFormSubmit = (e, data) => {
      e.preventDefault();
        console.log('Form submitted:', data);
        // Perform any action with the submitted data
    } 
  return (
    <div>
        <h2>Dynamic Usage Form Example</h2>
        <DynamicForm schema={formDataSchema} onSubmit={handleFormSubmit} />
    </div>
  )
}

export default DynamicUsage