import React, { useEffect, useState } from 'react'

//presentational component
function PresentationalvsContainerComp({ user }) {
  return (
    <div>
        {user.name} - {user.email}
    </div>
  )
}

export default PresentationalvsContainerComp;


// container component:
import React from 'react'

function ContainerComp() {
    const [user, setuser] = useState([]);

    useEffect(() => {
        const fetchuser = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
            const data = await response.json();
            setuser(data);
        }
        fetchuser();
    },[]);

  return (
    <div>
        {user && <PresentationalvsContainerComp user={user} /> }
    </div>
  )
}

// export default ContainerComp;