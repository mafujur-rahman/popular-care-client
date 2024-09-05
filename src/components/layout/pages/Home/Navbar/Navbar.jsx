import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    // logout
    const handleLogout = () => {
        logOut()
            .then()
            .catch();
    };

    return (
        <div className="bg-[#1e2537]">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
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
                            className="menu menu-sm dropdown-content bg-[#323946] rounded-box text-xl text-white font-medium z-[2] mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink
                                    to='/'
                                    style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#4F46E5" : "",
                                            padding: isActive ? "8px" : "",
                                            borderRadius: isActive ? "8px" : ""
                                        };
                                    }}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about-us'
                                   style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#4F46E5" : "",
                                            padding: isActive ? "8px" : "",
                                            borderRadius: isActive ? "8px" : ""
                                        };
                                    }}
                                >
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/services'
                                   style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#4F46E5" : "",
                                            padding: isActive ? "8px" : "",
                                            borderRadius: isActive ? "8px" : ""
                                        };
                                    }}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                   style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#4F46E5" : "",
                                            padding: isActive ? "8px" : "",
                                            borderRadius: isActive ? "8px" : ""
                                        };
                                    }}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* logo */}
                    <a className="w-28 h-28 text-xl">
                        <img src="/logo.png" alt="logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-xl text-gray-300 font-medium px-1">
                        <li>
                            <NavLink
                                to='/'
                               style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#4F46E5" : "",
                                            padding: isActive ? "8px" : "",
                                            borderRadius: isActive ? "8px" : ""
                                        };
                                    }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about-us'
                               style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#4F46E5" : "",
                                            padding: isActive ? "8px" : "",
                                            borderRadius: isActive ? "8px" : ""
                                        };
                                    }}
                            >
                                About us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/services'
                               style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#4F46E5" : "",
                                            padding: isActive ? "8px" : "",
                                            borderRadius: isActive ? "8px" : ""
                                        };
                                    }}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/contact'
                               style={({ isActive }) => {
                                        return {
                                            backgroundColor: isActive ? "#4F46E5" : "",
                                            padding: isActive ? "8px" : "",
                                            borderRadius: isActive ? "8px" : ""
                                        };
                                    }}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <a onClick={handleLogout} className="btn bg-indigo-600 hover:bg-purple-600 border-none text-white mr-2">
                            Log out
                        </a>
                    ) : (
                        <>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => (isActive ? "active" : undefined)}
                            >
                                <a className="btn bg-indigo-600 hover:bg-purple-600 border-none text-white mr-2">
                                    Login
                                </a>
                            </NavLink>
                            <NavLink
                                to='/register'
                                className={({ isActive }) => (isActive ? "active" : undefined)}
                            >
                                <a className="btn bg-indigo-600 hover:bg-purple-600 border-none text-white">
                                    Register
                                </a>
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
