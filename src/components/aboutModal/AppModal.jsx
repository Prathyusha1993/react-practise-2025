import React, {useState} from 'react'
import Modal from './Modal';

function AppModal() {
    const[isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div>
        <h2>Modal Example</h2>
        <button onClick={openModal}>Open Modal</button>
        <Modal isOpen = {isModalOpen} onClose={closeModal}>
            <h3>This is modal content</h3>
            <p>Click outside this area to close.</p>
        </Modal>
    </div>
  );
}

export default AppModal