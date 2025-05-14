import React, { useEffect, useState } from 'react'

function DebounceInputSearch() {
    const[searchTerm, setSearchTerm] = useState('');
    const [debounceSearchTerm, setDebounceSearchTerm] = useState('');

   useEffect(() => {
    const timer = setTimeout(() => {    //set a timer wheneber searchterm changes
        setDebounceSearchTerm(searchTerm);       //after delay update debounce search term
    }, 500);

    return () => {
        clearTimeout(timer);   //clear the timer when search term changes
    }
   }, [searchTerm]);

//    you can now debounceSearchTerm to perfomr actual search term changes
useEffect(() => {
    if(debounceSearchTerm) {
    console.log('Performing search for:', debounceSearchTerm);
    // In a real application, you would call your search API here
    }

}, [debounceSearchTerm]);
  return (
    <div>
        <h2>Debounce Input Search using useEffect and setTimeout</h2>
        <input type='text' placeholder='Enter to Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value) }/>
    </div>
  )
}

export default DebounceInputSearch