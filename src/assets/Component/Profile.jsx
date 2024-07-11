import React from 'react'
import './profile.css'
const Profile = ({username,email}) => {
  return (
    <div className='impp'>
      <div className="pimg"><img src="https://wikifid.com/wp-content/uploads/2021/05/Johnny-Sins-Biography-Wiki.jpg" alt="" /></div>
      <div className='credent'>
        <h1>{username}</h1>
        <h1>{email}</h1>
      </div>
    </div>
  )
}

export default Profile
