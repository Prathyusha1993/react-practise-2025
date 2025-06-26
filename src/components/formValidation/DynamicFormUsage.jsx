import React from 'react'
import DynamicFormValidation from './DynamicFormValidation';
import fields from './dynamicFormDataSchema.json';

function DynamicFormUsage() {
    const handleSubmit = (data) => {
        console.log('Form submitted:', data);
    }
  return (
    <div>
        <DynamicFormValidation schema={fields} onSubmit={handleSubmit} />
    </div>
  )
}

export default DynamicFormUsage;