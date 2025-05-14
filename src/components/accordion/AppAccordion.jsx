import React from 'react';
import AccordionEx from './AccordionEx';

const faqItems = [
    {
        title: 'What is React?',
        content: 'React is a JavaScript library for building user interfaces.',
    },
    {
        title: 'What are components in React?',
        content: 'Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via the render() function.'
      },
      {
        title: 'What is JSX?',
        content: 'JSX stands for JavaScript XML. It is a syntax extension to JavaScript that allows you to write HTML-like code within your JavaScript files. It gets transformed into regular JavaScript function calls.'
      }
];

function AppAccordion() {
  return (
    <div>
        <h1>Frequently asked Questions</h1>
        <AccordionEx items={faqItems} />
    </div>
  )
}

export default AppAccordion