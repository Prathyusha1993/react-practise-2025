import React, { useRef, useState } from 'react'

// function controlledUncontrolled() {
//     const [value, setValue] = useState('');
//     const inputRef = useRef(null);
//   return (
//     <div>
//         <input value={value} onChange={() => setValue(e.target.value)} />
//         <div>
//             <input ref={inputRef} />
//             <button onClick={() => alert(inputRef.current.value)}>Submit</button>
//         </div>
//     </div>
//   )
// }


function controlledUncontrolled() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
  }

  const handleUncontrolledSubmit = (e) => {
    e.preventDefault(); 
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    alert(`Uncontrolled Input Value: ${name}, ${age}`);
  }
return (
  <div>
    <h2>Controlled vs Uncontrolled components: </h2>
    <form onSubmit={handleSubmit}>
    <input type='text' value={name} onChange={() => setName(e.target.value)} placeholder='Enter name' />
    <input type='email' value={email} onChange={() => setEmail(e.target.value)} placeholder='Enter name' />
    <button type='submit'>Submit</button>
    </form>
      
      <div>
          <form>  
          <input ref={nameInputRef} placeholder='Enter name'/>
          <input ref={ageInputRef} placeholder='Enter age'/>
          <button onClick={handleUncontrolledSubmit}>Submit</button>
          </form>
      </div>
  </div>
)
}

export default controlledUncontrolled;


