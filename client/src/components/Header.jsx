import React from 'react'
import { Link } from 'react-router-dom'
import { BiSolidInstitution } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    return (
        <div>
            <header className='p-4 flex justify-between'>
                <Link to='/' className='flex items-center gap-1'>
                    <BiSolidInstitution size={35} color="Darkorange" />
                    <span className='font-bold text-xl'>tutnet</span>
                </Link>
                <div className='flex gap-2 border border-gray-300 rounded-full px-4 py-2 shadow-md shadow-gray-500'>
                    <div>Tutors</div>
                    <div className='border-l border-gray-300' />
                    <div>Subjects</div>
                    <div className='border-l border-gray-300' />
                    <div>About us</div>
                    <div className='border-l border-gray-300' />
                    <div className='font-thin'>Search</div>
                    <button className='bg-orange-400 text-white p-1 rounded-full'>
                        <IoIosSearch size={20} />
                    </button>
                </div>
                <div className='flex gap-2 border border-gray-300 rounded-full px-4 py-2'>
                    <button className='p-1 rounded-full'>
                        <IoMenu size={20} />
                    </button>
                    <button className='p-1 rounded-full'>
                        <CgProfile size={20} />
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header
