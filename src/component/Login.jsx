import {React, useState, useContext} from 'react'
import UserContext from '../context/Usercontext'

const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handlesubmit = (e) => {
   
        e.preventDefault()
        setUser( {username,password})

    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={username}
      onChange={(e)=>username(e.target.value)}
      placeholder='username' />
      <input type="text" 
      placeholder='password' />
      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
