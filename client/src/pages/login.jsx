import '../assets/scss/login.scss';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdOutlineNumbers } from 'react-icons/md';

const Login = () => {
    return (
        <div className='body'>
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
                            <input type='checkbox' /> Remember me
                        </label>
                        <a href='#'> Forgot password?</a>
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};
export default Login;
