import React from 'react'
import { Link , NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-between bg-primary ' >
      <NavLink to="/" >
        <div className='text-white'>React Movie App</div>
      </NavLink>
      <div>
        <NavLink to="/login" >
          <button>Login</button>
        </NavLink>
        <NavLink to="/register" >
        <button>Register</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
