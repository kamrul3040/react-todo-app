import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navigation.module.css'

export default function Navigation() {
  return (
    <ul>  
      <li><i className="fa-solid fa-user"></i></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      
          
                {/* <!-- <li><a href="signup.html"><i class="fa-sharp fa-solid fa-right-to-bracket"></i></a></li> --> */}
     </ul>
  )
}
