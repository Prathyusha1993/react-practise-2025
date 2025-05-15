import React, {useState} from 'react';
import ModalComponent from './ModalComponent';

function ExampleUsage(){
    const [isModalOpen,setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div>
            <button onClick={handleOpenModal}>Open Modal</button>
            <ModalComponent isOpen={isModalOpen} onClose={handleCloseModal}>
                <h3>User Details</h3>
                    <label>Name</label>
                    <input type='text' />
                    <label>Age</label>
                    <input type='text' />
                    <label>Contact</label>
                    <input type='text' />
                    <button onClick={() => alert('submitted')}>Submit</button>
            </ModalComponent>
        </div>
    )
}

export default ExampleUsage;