import React from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect,useState} from 'react'
const Signup = ({setuname,setemail,setpassword}) => {
  const [name,setname]=useState('')
  const [email,setemail1]=useState('')
  const [password,setpassword1]=useState('')
  const [check,setcheck]=useState('')
  const navigate=useNavigate(null)
 
  const verify=()=>{
    if(name ==='' || email==='' || password===''){
      alert('enter crendentials')
    }
    else{
    setemail(email)
    setuname(name)
    setpassword(password)
    navigate('/login')
    }
  }
  return (
    <div>
      <div className="signup">
        <h1 className='head'>Signup</h1>
        <div className="simple">
          <div className="signame"><label htmlFor="name">name: <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='enter name'/></label></div>
          <div className="signame"><label htmlFor="email">email: <input type="email" required value={email} onChange={(e)=>{setemail1(e.target.value)}} placeholder='enter email'/></label></div>
          <div className="signame"><label htmlFor="signame">password: <input type="password" required value={password} onChange={(e)=>{setpassword1(e.target.value)}} placeholder='enter password'/></label></div>
        </div>
        <div className="login1"><input type="submit" className='submit' onClick={verify}/> <Link to='/login'>click here to login</Link></div>
      </div>
    </div>
  )
}

export default Signup
