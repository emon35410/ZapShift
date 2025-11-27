import React from 'react';
import Logo from '../../../Component/Logo/Logo';
import { Link, NavLink } from 'react-router';
import "../Navbar/Navbar.css"
import arrow from "../../../assets/Image/Frame 4.png"
import { LuSquareArrowUpRight } from 'react-icons/lu';
import useAuth from '../../../Hooks/useAuth';


const Navbar = () => {
    const { user, logOut } = useAuth();
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    const links = <>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
        <li><NavLink to="/aboutus">About Us</NavLink></li>
        <li><NavLink to="/sendaparcel">Send Parcel</NavLink></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        <li><NavLink to="/bearider">Be a Rider</NavLink></li>
        {
            user ? (
                <li><NavLink to="/dashboard/myparcels">My Parcels</NavLink></li>
            ) : null
        }

    </>
    return (
        <nav className="navbar rounded-sm bg-base-100 mt-5 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <div className="btn btn-ghost">
                    <Link to="/"><Logo></Logo></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end hidden md:flex space-x-2">
                <div>
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn w-full rounded-lg text-secondary">
                                Sign Out
                            </button>
                            :
                            <Link to="/login" className="btn w-full rounded-lg text-secondary">Sign In</Link>
                    }
                </div>
                <div className='flex justify-center items-center'>
                    <Link to={user ? "/bearider" : "/login"} className='btn bg-primary rounded-lg hover:bg-[#d0e29a]'>Be a Rider</Link>
                    <img className='w-10 h-10' src={arrow} alt="" />
                </div>
            </div>
            <div className="navbar-end dropdown md:hidden dropdown-bottom">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-50 w-40 p-2 shadow-sm flex flex-col gap-2">
                    <li>
                        {
                            user ? <button onClick={handleLogOut} className="btn w-full rounded-lg text-secondary">
                                Sign Out
                            </button>

                                :
                                <Link to="/login" className="btn w-full rounded-lg text-secondary">Sign In</Link>
                        }
                    </li>
                    <li className="flex justify-between items-center">
                        <Link
                            to={user ? "/bearider" : "/login"}
                            className="btn w-full bg-primary rounded-lg hover:bg-[#d0e29a]"
                        >
                            Be a Rider <LuSquareArrowUpRight />
                        </Link>
                    </li>

                </ul>
            </div>

        </nav>
    );
};

export default Navbar;