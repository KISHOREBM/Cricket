import './App.css'
import Home from './assets/Component/Home'
import Signup from './assets/Component/Signup'
import Login from './assets/Component/Login'
import Navbar from './assets/Navbar'
import Profile from './assets/Component/Profile'
import Notfound from './assets/Component/Notfound'
import { Routes,Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [Logedin,setLogedin]=useState(false)
  const [username,setuname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  return (
    <div className='App'>
      <Routes>
        <Route  path='/' element={<Navbar/>}>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/login' element={<Login setLogedin={setLogedin }  passworda={password} emaila={email}/>}/>
          <Route path='/signup' element={<Signup setuname={setuname} setemail={setemail} setLogedin={setLogedin } setpassword={setpassword}/>}/>
          <Route path='/profile' element={Logedin?<Profile username={username} email={email}/> : <Navigate replace to={'/login'}/>}/> 
        </Route>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
      {/* <Profile username={username} email={email}/> */}
    </div>
  )
}

export default App
