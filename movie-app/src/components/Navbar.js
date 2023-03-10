import React from 'react'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-between bg-primary' >
      <div>React Movie App</div>
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  )
}

export default Navbar
