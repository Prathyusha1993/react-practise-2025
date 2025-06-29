import React, {useState} from 'react'
import ModalComponentPractise from './ModalComponentPractise';

function ModalExampleUsage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () =>{
        setIsModalOpen(true);
    };

    const handleCloseMdal = () =>{
        setIsModalOpen(false);
    };

  return (
    <div>
       <button onClick={handleOpenModal}>Open Modal</button>
       <ModalComponentPractise isOpen={isModalOpen} onClose={handleCloseMdal}>
        <h3>User Detail</h3>
        <label>Name</label>
        <input type='text' />
        <label>Age</label>
        <input type='text' />
        <label>Contact No.</label>
        <input type='text' />
        <button onClick={() => alert('Submitted')}>Submit</button>
       </ModalComponentPractise>
    </div>
  )
}

export default ModalExampleUsage;