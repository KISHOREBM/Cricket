import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
const Login = ({setLogedin,passworda,emaila}) => {
  const [name,setname]=useState('enter email id:')
  const [password,setpassword]=useState('')
  const navigate=useNavigate(null)
  const verify=(e)=>{
    if(name===emaila && password===passworda){
      navigate('/profile')
      setLogedin(true)
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
          <div className="logmail"><label htmlFor="email"><p>email:</p> <input type="email" required value={name} onChange={(e)=>{setname(e.target.value)}}/></label></div>
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