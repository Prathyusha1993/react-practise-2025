import React, { useMemo, useState } from 'react'

function UseMemoEx({items}) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = useMemo(() => {
        console.log('Filtering items...');
        return items.filter(item => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [items, searchTerm]);
    
  return (
    <div>
        <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <ul>
            {filteredItems.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default UseMemoEx;