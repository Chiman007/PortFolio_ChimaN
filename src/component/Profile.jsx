import React, { useContext } from 'react'
import UserContext from '../context/Usercontext'

const Profile = () => {

    const {user} =useContext(UserContext)
    if(!user) return <div>please Login</div>
  return (
    <div>
      welcome
    </div>
  )
}

export default Profile
