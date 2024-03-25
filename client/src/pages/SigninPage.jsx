import React from 'react'
import { Link } from 'react-router-dom'

const SigninPage = () => {
    return (
        <div className='mt-4 grow flex items-center justify-around'>
            <div className='mb-32'>
                <h1 className='text-4xl text-center mb-4'>Sign Up</h1>
                <form className='max-w-md mx-auto'>
                    <input type="email" placeholder='your@mail.com' className='w-full border my-1 py-2 px-3 rounded-2xl' />
                    <input type='password' placeholder='password' className='w-full border my-1 py-2 px-3 rounded-2xl' />
                    <button className='bg-orange-400 p-2 text-white w-full rounded-full'>Sign In</button>
                    <div className='text-center py-2 text-gray-500'>
                        Don't have account? <Link to='/register' className='underline text-black'>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SigninPage
