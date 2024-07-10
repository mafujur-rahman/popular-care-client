import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className=" bg-[#1e2537]">
            <div className="navbar container mx-auto">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box text-xl text-gray-300 font-medium z-[1] mt-3 w-52 p-2 shadow">
                        <NavLink to='/'><li><a>Home</a></li></NavLink>
                        <NavLink to='/workout'><li><a>Workouts</a></li></NavLink>
                        <NavLink to='/nutrition'><li><a>Nutrition</a></li></NavLink>
                        <NavLink to='/health'><li><a>Health</a></li></NavLink>
                        <NavLink to='/community'><li><a>Community</a></li></NavLink>
                        <NavLink to='/profile'><li><a>Profile</a></li></NavLink>
                    </ul>
                </div>
                {/* logo */}
                <a className=" w-28 h-28 text-xl">
                    <img src="/logo.png" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-xl text-gray-300 font-medium px-1">
                    <NavLink to='/'><li><a>Home</a></li></NavLink>
                    <NavLink to='/workout'><li><a>Workouts</a></li></NavLink>
                    <NavLink to='/nutrition'><li><a>Nutrition</a></li></NavLink>
                    <NavLink to='/health'><li><a>Health</a></li></NavLink>
                    <NavLink to='/community'><li><a>Community</a></li></NavLink>
                    <NavLink to='/profile'><li><a>Profile</a></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login'><a className="btn bg-[#9d47d0] border-none text-white mr-2">Login</a></NavLink>
                <NavLink to='/signup'><a className="btn bg-[#9d47d0] border-none text-white">Sign up</a></NavLink>
            </div>
            </div>
        </div>
    );
};

export default Navbar;