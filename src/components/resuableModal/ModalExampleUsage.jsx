import React, {useState} from 'react'
import ModalComponentPractise from './ModalComponentPractise';
import useModalCustom from './useModalCustom';

function ModalExampleUsage() {
    const {isOpen, openModal, closeModal} = useModalCustom();
    const {isOpen: isNestedOpen, openModal: openNested, closeModal: closeNested} = useModalCustom();

  return (
    <div>
       <button onClick={openModal}>Open Modal</button>
       <ModalComponentPractise isOpen={isOpen} onClose={closeModal}>
        <h3>User Detail</h3>
        <label>Name</label>
        <input type='text' />
        <label>Age</label>
        <input type='text' />
        <label>Contact No.</label>
        <input type='text' />
        <button onClick={openNested}>Open Nested Modal</button>
        <button onClick={() => alert('Submitted')}>Submit</button>

        <ModalComponentPractise isOpen={isNestedOpen} onClose={closeNested}>
            <h3>Nested Modal</h3>
            <p>This is a nested modal inside the main modal.</p>
            <button onClick={closeNested}>Close Nested</button>
        </ModalComponentPractise>
       </ModalComponentPractise>
    </div>
  )
}

export default ModalExampleUsage;