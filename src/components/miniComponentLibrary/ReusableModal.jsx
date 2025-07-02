import React, { useEffect } from 'react'
import './modal.css';

function ReusableModal({isOpen, onClose, children}) {
    const modalRef = useRef(null);

    const handleKeyDown = (e) => {
        if(e.key === 'Escape'){
            onClose();
        }
    };

    const handleOverlayClick = (e) => {
        if(modalRef.current === e.target){
            onClose();
        }
    }

    useEffect(() => {
        if(isOpen){
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }else {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow= '';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        }
    }, [isOpen, onClose]);

    if(!isOpen) return null;

  return (
    <div ref={modalRef} onClick={handleOverlayClick} className="reusable-modal-overlay">
        <div className="reusable-modal">
            {children}
            <button className='reusable-button' onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

export default ReusableModal;