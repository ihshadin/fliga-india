import React from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const navItems = <>
        <li><Link to='/' className='py-2 px-5 lg:hover:text-white lg:focus:text-white text-xl'>Home</Link></li>
        <li><Link to='/#services' className='py-2 px-5 lg:hover:text-white lg:focus:text-white text-xl'>Service</Link></li>
        <li><Link to='/#portfolio' className='py-2 px-5 lg:hover:text-white lg:focus:text-white text-xl'>Portfolio</Link></li>
        <li><Link to='/#community' className='py-2 px-5 lg:hover:text-white lg:focus:text-white text-xl'>Community</Link></li>
        <li><Link to='/#blog' className='py-2 px-5 lg:hover:text-white lg:focus:text-white text-xl'>Blog</Link></li>
    </>
    return (
        <header className='bg_fliga'>
            <div className="navbar text-white py-4 lg:py-8 justify-between gap-10 font-inter">
                <div className="navbar-start w-auto">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn bg-transparent border-0 text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content !w-80 text-black mt-3 p-2 shadow bg-base-100 rounded-box">
                            {navItems}
                        </ul>
                    </div>
                    <a className="w-full max-w-[120px] lg:max-w-[190px]">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex mr-auto">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end w-auto gap-3 lg:gap-6 hidden lg:flex">
                    <Link className="bg_btn border-0 rounded-full py-2 lg:py-3 px-5 lg:px-9 text-lg lg:text-xl text-white capitalize font-normal">Sign Up</Link>
                    <Link className="bg_btn border-0 rounded-full py-2 lg:py-3 px-5 lg:px-9 text-lg lg:text-xl text-white capitalize font-normal">Sign In</Link>
                </div>
            </div>
        </header>
    );
};

export default NavBar;