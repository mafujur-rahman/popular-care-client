import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const {login, googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const location = useLocation();

    // google log in
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result =>{
            console.log(result)
            Swal.fire({
                icon: "success",
                title: "Successfully Logged in",
                showConfirmButton: false,
                timer: 1500
              });
            setTimeout(() => {
                navigate(location?.state? location.state : "/");
            }, 2000);
        })
        .catch(error =>{
            console.error(error)
            Swal.fire({
                icon: "error",
                text: "Failed to login",
              });
        })
    }

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email,password)
        .then(result =>{
            console.log(result);
            Swal.fire({
                icon: "success",
                title: "Successfully Logged in",
                showConfirmButton: false,
                timer: 1500
              });
            setTimeout(() => {
                navigate(location?.state? location.state : "/");
            }, 2000);
        })
        .catch(error =>{
            console.error(error);
            Swal.fire({
                icon: "error",
                text: "Failed to login",
              });
        })
    }
    return (
        <div className="text-center bg-[#323946] min-h-screen flex justify-center items-center">
            <div className="hero-content  flex-col ">
                <div className="text-center lg:text-left  ">
                    <h1 className="text-5xl font-bold text-white mb-8"><span className="text-[#ac4ae0]">Welcome</span> Back.</h1>
                    <h1 className="text-5xl font-bold text-white text-center pb-10">Login <span className="text-[#ac4ae0]">Now!</span></h1>
                </div>
                <div className="card bg-[#1f242d]  w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered bg-[#323946] text-gray-200" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-gray-300">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered bg-[#323946] text-gray-200" required />
                            <span onClick={() =>setShowPassword(!showPassword)}  className="absolute top-[50px] text-white right-4">
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-[#ac4ae0] hover:bg-[#323946] text-white border-none">Login</button>
                            <button onClick={handleGoogleLogin} className="btn mt-4 bg-[#f79b2f] border-none"><FaGoogle /> LOGIN WITH GOOGLE</button>
                            <p className="text-gray-300 pt-4">New here? <Link to='/register'><span className="text-[#ac4ae0] font-bold cursor-pointer">Register</span></Link> now!</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;