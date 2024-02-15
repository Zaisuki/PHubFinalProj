import React from 'react';
import pic from '../../assets/img/Pic.jpg';

function Input() {
    return (
        <div className='input'>
            <input type='text' placeholder='Type Something...' />
            <div className='send'>
                <img src={pic} className='inbox-img' alt='Pic' />
                <div className='button'>
                <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Input;
