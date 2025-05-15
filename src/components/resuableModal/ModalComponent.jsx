import React, { useEffect, useRef, useState } from 'react';
import './Modal.css';

function ModalComponent({isOpen, onClose, children}) {
 
    const modalOverlayRef = useRef(null);

    const handleKeyDown = (e) => {
        if(e.key === 'Escape'){
            onClose();
        }
    };

    const handleOverlayClick = (e) => {
        if(modalOverlayRef.current === e.target){
            onClose();
        }
    };

    useEffect(() => {
        if(isOpen){
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';   //prevent scrolling when modal is open
        } else {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';   //restore scrolling
        } 
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';   //clean up on unmount
        }
    },[isOpen, onClose]);

    if(!isOpen) return null;

  return (
    <div className='modal-overlay' ref={modalOverlayRef} onClick={handleOverlayClick}>
        <h2>Reusable Modal Component</h2>
        
        <div className='modal-content'>
            {children}
            <button className='close-button' onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

export default ModalComponent;