import React from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect,useState} from 'react'
const Signup = ({setuname,setemail,setLogedin,setpassword}) => {
  const [name,setname]=useState('enter name:')
  const [email,setemail1]=useState('enter email:')
  const [password,setpassword1]=useState('')
  const navigate=useNavigate(null)
  useEffect(()=>{
    setLogedin(true)
    setemail(email)
  },[])
  const verify=()=>{
    if(name ==='enter name:' || email==='enter email:' || password===''){
      alert('enter crendentials')
    }
    else{
      setLogedin(true)
    setemail(email)
    setuname(name)
    setpassword(password)
    navigate('/profile')
    }
  }
  return (
    <div>
      <div className="signup">
        <h1 className='head'>Signup</h1>
        <div className="simple">
          <div className="signame"><label htmlFor="name">name: <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/></label></div>
          <div className="signame"><label htmlFor="email">email: <input type="email" required value={email} onChange={(e)=>{setemail1(e.target.value)}}/></label></div>
          <div className="signame"><label htmlFor="signame">password: <input type="password" required value={password} onChange={(e)=>{setpassword1(e.target.value)}}/></label></div>
        </div>
        <div className="login1"><input type="submit" className='submit' onClick={verify}/> <Link to='/login'>click here to login</Link></div>
      </div>
    </div>
  )
}

export default Signup
