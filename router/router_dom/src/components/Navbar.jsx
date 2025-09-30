import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between items-center bg-green-700 w-full h-25'>
                <div className="logo font-bold mx-10">
                    <h1>Logo</h1>
                </div>
                <ul className='mx-10'>
                    <Link className="mx-1" to="/home">Home</Link>
                    <Link className="mx-1" to="/about">About</Link>
                    <Link className="mx-1" to="/contact">Contact</Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar