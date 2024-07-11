
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";





const Register = () => {

    const {createUser} = useContext(AuthContext)


    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUser ={name,email,password}
        console.log(newUser)

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Create Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered bg-[#323946] text-gray-200" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ac4ae0] text-white border-none" type="submit">Register</button>
                            <p className="text-gray-300 pt-4">Already have an Account? <Link to='/login'><span className="text-[#ac4ae0] font-bold cursor-pointer">Login</span></Link> now!</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;