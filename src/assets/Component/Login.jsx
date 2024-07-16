import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
const Login = ({setLogedin,passworda,emaila,setemail}) => {
  const [name,setname]=useState('')
  const [password,setpassword]=useState('')
  const navigate=useNavigate(null)
  const [check,setcheck]=useState('see')
  // useEffect(()=>{
  //   setLogedin(true)
  //   setemail(emaila)
  // },check)
  const verify=(e)=>{
    if(name===emaila && password===passworda){
      navigate('/profile')
      setLogedin(true)
      setcheck('login')
    }
    else{
      alert('wrong credential')
    }
  }
  return (
    <div className='parent'>
      <div className="login">
        <h1 className='head'>Login</h1>
        <div className="simple">
          <div className="logmail"><label htmlFor="email"><p>email:</p> <input type="email" required value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='enter email'/></label></div>
          <div className="logmail"><label htmlFor="password"><p>password:</p> <input type="password" value={password} required onChange={(e)=>{setpassword(e.target.value)}}/></label></div>
        </div>
        <div className="signup1"><Link to='/signup'> click to signup</Link>
        <input type="submit" className="submit" onClick={verify} />
        </div>
        
      </div>
    </div>
  )
}

export default Login
