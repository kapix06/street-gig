import React from 'react'




//const API_URL = "http://localhost:5005";        
 
function UserDetails (props) {


const user = props.user


console.log('user detail', user)
 
  



return (
        <div className="UserD2">

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