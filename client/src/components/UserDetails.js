import React, { useContext } from 'react'

import { AuthContext } from '../context/auth';


//const API_URL = "http://localhost:5005";        
 
function UserDetails (props) {


const { user } = useContext(AuthContext)


console.log(user)
 
  



return (
        <div className="UserD">

        <div className='UserCard'>

            <p>Username: {user?.name}</p>
            <p>E-Mail: {user?.email}</p>
            <p>Location: {user?.location}</p>
            <p>Description: {user?.description}</p>

        </div>  
 
         
        </div>
    )
}

export default UserDetails;