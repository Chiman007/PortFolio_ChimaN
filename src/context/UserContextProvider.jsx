import React, { Children, useState } from 'react'
import UserContext from './Usercontext'


const UserContextProvider = ({Children}) => {

    const [user, setUser] = useState(null)
    return (
    <UserContextProvider  value={{UserContext, setUser}}>

     {Children}
    </UserContextProvider>
)
}
export default UserContextProvider;
