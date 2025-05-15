import React, { useState } from 'react'
import './Dropdown.css';

function DropdownMenu({options, onSelect}) {
    const [isOpen, setIsOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    
    const toggleDropdown = () =>{
        setIsOpen(prev => !prev);
        setFocusedIndex(0);
    };

    const handleKeyDown = (e) => {
        if(!isOpen) return;
        switch(e.key){
            case 'ArrowDown':
                e.preventDefault();
                setFocusedIndex(prev => (prev+1) % options.length);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setFocusedIndex(prev => (prev - 1 + options.length) % options.length);
                break;
            case 'Enter':
                e.preventDefault();
                if(focusedIndex >= 0) {
                    onSelect(options[focusedIndex]);
                    setIsOpen(false);
                }
                break;
            case 'Escape':
                e.preventDefault();
                setIsOpen(false);
                break;
            default:
                break;
        }
    }

    const handleClickOption = (index) => {
        onSelect(options[index]);
        setIsOpen(false);
    }

  return (
    <div className='dropdown'>
        <h2>Keyboard Dropdown Example</h2>
        <button 
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-haspopup='true'
        aria-expanded={isOpen}
        className='dropdown-button'
         >
            Select Option
        </button>
        {isOpen && (
            <ul className='dropdown-menu' role='menu'>
                {options.map((option, index) => (
                    <li 
                    key={option}
                    role='menuitem'
                    tabIndex={focusedIndex === index ? 0 : -1}
                    onKeyDown={handleKeyDown}
                    onClick={() => handleClickOption(index)}
                    className={`dropdown-item ${index === focusedIndex ? 'focused' : ''}`}
                    style={{backgroundColor: index === focusedIndex ? '#f0f0f0' : 'white',
                        padding: '8px 12px',
                        cursor: 'pointer',
                    }}>
                        {option}
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default DropdownMenu;