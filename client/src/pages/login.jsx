import { useRef, useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import '../assets/scss/login.scss';
import { useNavigate } from 'react-router-dom';
import { cookies, login } from '../services/entry';

const Login = () => {
    const studentRef = useRef(false);
    const navigate = useNavigate();
    const [userIdentifier, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await login({ userIdentifier, password });
            if (response.message === 'success') {
                cookies.set('authorization', response.accessToken);
                cookies.set('userType', response.userType);
                navigate('/');
                window.location.reload();
            } else {
                console.log(response);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className='login-container'>
            <div className='wrapper'>
                <form>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input type='text' placeholder='Email or Username' required value={userIdentifier} onChange={(e) => setUsername(e.target.value)} />
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className='icon' />
                    </div>

                    <div className='remember-forgot'>
                        <label>
                            {/* TODO: fix this */}
                            <input type='checkbox' ref={studentRef} /> Remember me?
                        </label>
                        <a href='#'> Forgot password?</a>
                    </div>
                    <button type='button' onClick={handleLogin}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Login;
