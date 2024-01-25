import { useState, useRef } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdOutlineNumbers } from 'react-icons/md';
import '../assets/scss/login.scss';

const Login = () => {
    const studentRef = useRef(false);
    return (
        <div className='login-container'>
            <div className='wrapper'>
                <form action=''>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='number' placeholder='Student Number' required />
                        <MdOutlineNumbers className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <label>
                            {/* TODO: change Professor to Remember me */}
                            <input type='checkbox' ref={studentRef} /> Professor?
                        </label>
                        <a href='#'> Forgot password?</a>
                    </div>
                    <button type='submit' onClick={() => {
                        
                    }}>Login</button>
                </form>
            </div>
        </div>
    );
};
export default Login;
