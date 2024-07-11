
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";





const Register = () => {
    const navigate = useNavigate();
    const {createUser} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)


    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser ={name,email,password}
        console.log(newUser)

        if(password.length < 8){
            Swal.fire({
                icon: "error",
                text: "Password must be a minimum length of 8 characters",
              });
        return;
        }
        if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: "error",
                text: "Password should have a lowercase character",
            });
            return;
        }
        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "error",
                text: "Password should have a uppercase character",
            });
            return;
        }
        if (!/\d/.test(password)) {
            Swal.fire({
                icon: "error",
                text: "Password should have a digit or number",
            });
            return;
        }

        // create user
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            Swal.fire({
                icon: "success",
                title: "Successfully Registered",
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
                text: "Failed to Register",
              });
        })
    }


    return (
        <div className="text-center bg-[#323946] min-h-screen flex justify-center items-center">
            <div className="hero-content  flex-col ">
                <div className="text-center lg:text-left  ">
                    <h1 className="text-5xl font-bold text-white mb-8">Welcome to <span className="text-[#ac4ae0]">FitTrack.</span> </h1>
                    <h1 className="text-5xl font-bold text-white text-center pb-10"><span className="text-[#ac4ae0]">Register</span> Now!</h1>
                </div>
                <div className="card bg-[#1f242d]  w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Full Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered bg-[#323946] text-gray-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered bg-[#323946] text-gray-200" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text text-gray-300">Create Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered bg-[#323946] text-gray-200" required />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute top-[50px] text-white right-4">
                                {
                                    showPassword ? <FaEyeSlash /> : <FaEye />
                                }
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ac4ae0] hover:bg-[#323946] text-white border-none" type="submit">Register</button>
                            <p className="text-gray-300 pt-4">Already have an Account? <Link to='/login'><span className="text-[#ac4ae0] font-bold cursor-pointer">Login</span></Link> now!</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;