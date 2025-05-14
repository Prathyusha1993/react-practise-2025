import React, {useState} from 'react';
import './Accordion.css';

function AccordionEx({items}) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }

  return (
    <div className='accordion'>
        {items.map((item, index) => (
            <div key={index} className='accordion-item'>
                <div className='accordion-header' onClick={() => handleToggle(index)}>
                    {item.title}
                    <span className='toggle-icon'>{activeIndex === index ? '-' : '+'}</span>
                </div>
                {activeIndex === index && (
                    <div className='accordion-content'>{item.content}</div>
                )}
            </div>
        ))}
    </div>
  )
}

export default AccordionEx;