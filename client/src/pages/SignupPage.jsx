import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setC_password] = useState('');

    async function handleregister(e) {
        e.preventDefault();
        try {
            await axios.post('/register', {
                email,
                password,
            });
        } catch (error) {
            console.error('Registration failed:', error);
        }
    }


    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-32'>
                <h1 className='text-4xl text-center mb-4'>Register</h1>
                <form className='max-w-md mx-auto' onSubmit={handleregister}>
                    <input type="email"
                        placeholder='your@mail.com'
                        className='w-full border my-1 py-2 px-3 rounded-2xl'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='password'
                        className='w-full border my-1 py-2 px-3 rounded-2xl'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        type='password'
                        placeholder='confirm password'
                        className='w-full border my-1 py-2 px-3 rounded-2xl'
                        value={c_password}
                        onChange={e => setC_password(e.target.value)}
                    />
                    <button className='bg-orange-400 p-2 text-white w-full rounded-full'>Register</button>
                    <div className='text-center py-2 text-gray-500'>
                        Already have account? <Link to='/signin' className='underline text-black'>Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupPage;