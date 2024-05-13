import React from 'react'
import Login from "./Login"
import Signup from "./Signup"
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginRegister = () => {
  return (
    <div >
              
            <div className='nav align-items-center justify-content-center '>
                <h1>Welcome to Car Zone</h1>
              
            </div>
        <div className='d-flex justify-content-md-center'>
        <Signup/>
        <Login/>
        </div>

    </div>
  )
}

export default LoginRegister