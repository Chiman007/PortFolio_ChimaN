import React from 'react'
import UserContext from './context/Usercontext'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

const Content = () => {

  console.log("chiman hello from react.js series")
  return (
    <>
    {/* <UserContextProvider> */}
      
    <h2>Context API UseCase</h2>
     
     <Login />
     <Profile/>

    {/* </UserContextProvider> */}
    </>
  )
}

export default Content
