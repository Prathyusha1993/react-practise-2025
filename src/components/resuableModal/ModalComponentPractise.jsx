import React, { useEffect, useRef } from 'react'

function ModalComponentPractise({isOpen, onClose, children}) {
    const modalRef = useRef(null);
    const contentRef = useRef(null);

    const handleKeyDown = (e) =>{
        if(e.key === 'escape'){
            onClose();
        }
    };

    const handleOverlayClick = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    };

    useEffect(() => {
        if(isOpen){
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }else {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow='';
        }
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow='';
        }
    }, [isOpen, onClose]);

    if(!isOpen) return null;

  return (
    <div ref={modalRef} role='dialog' aria-modal='true' onClick={handleOverlayClick} className='modal-overlay'>
        <div className='modal-content slide-down' ref={contentRef} >
            {children}
            <button className='close-button' onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

export default ModalComponentPractise;