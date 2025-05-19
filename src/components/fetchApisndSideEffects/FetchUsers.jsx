import React, { useEffect, useState } from 'react'

function FetchUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if(!response.ok) throw new Error(`Error fetching users: ${response.statusText}`);
                const data = await response.json();
                setUsers(data);
            }catch(error){
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        }
        getUsers();
    }, []);

    if(loading) return <div>Loading...</div>;
    if(error) return <div>Error: {error}</div>;
    if(users.length === 0) return <div>No users found</div>;
  return (
    <div>
        <h3>Fetch and Display Users</h3>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FetchUsers;