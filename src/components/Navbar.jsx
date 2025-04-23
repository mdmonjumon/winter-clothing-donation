import { useContext } from 'react';
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
    const { user, userLogout } = useContext(AuthContext);

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/donation-campaigns'>Donation Campaigns</NavLink>
        <NavLink to='/how-to-help'>How to Help</NavLink>
        {
            user && <NavLink to='/dashboard'>Dashboard</NavLink>
        }
    </>
    return (
        <div className="navbar max-w-7xl mx-auto fixed top-0 z-50 left-1/2 -translate-x-1/2 bg-white">
            <div className="navbar-start">
                <div className="dropdown order-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg space-y-3">
                        {links}
                    </ul>
                </div>
                <img className='h-16 order-1' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10 text-base uppercase font-medium">

                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user && user.photoURL ?
                        <img className='h-10 w-10 size-full rounded-full mr-2' src={user.photoURL} alt={user.displayName} />
                        :
                        <FaUserCircle className='mr-2 text-[40px]' />
                }

                {
                    user && user.email ? <button onClick={userLogout} to='/login' className="btn btn-ghost text-lg">Logout</button> : <Link to='/login' className="btn btn-accent text-lg">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;