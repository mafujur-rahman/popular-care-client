import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="text-center bg-[#323946] min-h-screen flex justify-center items-center">
            <div className="hero-content  flex-col ">
                <div className="text-center lg:text-left  ">
                    <h1 className="text-5xl font-bold text-white mb-8">Welcome to <span className="text-[#ac4ae0]">FitTrack.</span> </h1>
                    <h1 className="text-5xl font-bold text-white text-center pb-10"><span className="text-[#ac4ae0]">SIGN UP</span> Now!</h1>
                </div>
                <div className="card bg-[#1f242d]  w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Full Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered bg-[#323946] text-gray-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered bg-[#323946] text-gray-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Create Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered bg-[#323946] text-gray-200" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ac4ae0] text-white border-none">Sign up</button>
                            <p className="text-gray-300 pt-4">Already have an Account? <Link to='/login'><span className="text-[#ac4ae0] font-bold cursor-pointer">Login</span></Link> now!</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;