import React, { useMemo, useState } from 'react'

const tableData = [
    { id: 1, name: 'Alice', email: 'alice@gmail.com', gender: 'F', contact: '9876543210' },
  { id: 2, name: 'Bob', email: 'bob@gmail.com', gender: 'M', contact: '8765432109' },
  { id: 3, name: 'Charlie', email: 'charlie@gmail.com', gender: 'M', contact: '7654321098' },
  { id: 4, name: 'Daisy', email: 'daisy@gmail.com', gender: 'F', contact: '6543210987' },
  { id: 5, name: 'Eve', email: 'eve@gmail.com', gender: 'F', contact: '5432109876' },
  { id: 6, name: 'Frank', email: 'frank@gmail.com', gender: 'M', contact: '4321098765' },
  { id: 7, name: 'Grace', email: 'grace@gmail.com', gender: 'F', contact: '3210987654' },
  { id: 8, name: 'Hank', email: 'hank@gmail.com', gender: 'M', contact: '2109876543' },
]

function TableSortPagination() {
    const [sortConfig, setSortConfig] = useState({key:'',direction: ''});
    const [currentPage, setCurrentpage] = useState(1);
    const [rowPerPage] = useState(4);
    const [searchTerm, setSearchTerm] = useState('');

    const sortedFilteredData = useMemo(() => {
        let filtered = [...tableData];
        if(searchTerm){
            filtered = filtered.filter(item => Object.values(item).some(val => 
                String(val).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
            ))
        }
        if(sortConfig.key){
            filtered.sort((a,b) => {
                if(a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
                if(a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }
        return filtered;
    }, [sortConfig, searchTerm]);

    const totalPages = Math.ceil(sortedFilteredData.length / rowPerPage);
    const paginatedData = sortedFilteredData.slice(
        (currentPage - 1) * rowPerPage,
        currentPage * rowPerPage
    );

    const requestSort = (key) => {
        let direction = 'asc';
        if(sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
        setSortConfig({ key, direction});
    };
  

  return (
    <div style={{padding: '20px'}}>
        <h3>Table Sorting and Pagination</h3>
        <input type='text' placeholder='Search...' style={{ marginBottom: '10px', padding: '5px' }} 
        value={searchTerm} 
        onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentpage(1);
        }} />
        <table className='sticky-header-table'>
            <thead>
                <tr>
                    <th onClick={() => requestSort('name')}>Name</th>
                    <th onClick={() => requestSort('email')}>Email</th>
                    <th onClick={() => requestSort('gender')}>Gender</th>
                    <th onClick={() => requestSort('contact')}>Contact</th>
                </tr>
            </thead>
            <tbody>
                {paginatedData.length ? (paginatedData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.contact}</td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td>No results found.</td>
                </tr>
            )}
            </tbody>
        </table>
        <div>
            <button disabled={currentPage === 1} onClick={() => setCurrentpage(p => p-1)}>Prev</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentpage(p => p+1)}>Next</button>
        </div>
    </div>
  )
}

export default TableSortPagination;