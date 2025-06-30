import React, {useCallback, useState} from 'react'

function useModalCustom(initialState=false) {
    const [isOpen, setIsOpen] = useState(initialState);

    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    // useCallback is used to memoize the functions so that they don't change on every render
  return { isOpen, openModal, closeModal};
}

export default useModalCustom;