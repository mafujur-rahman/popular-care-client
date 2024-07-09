import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="text-center bg-[#323946] min-h-screen flex justify-center items-center">
            <div className="hero-content  flex-col ">
                <div className="text-center lg:text-left  ">
                    <h1 className="text-5xl font-bold text-white mb-8"><span className="text-[#ac4ae0]">Welcome</span> Back.</h1>
                    <h1 className="text-5xl font-bold text-white text-center pb-10">Login <span className="text-[#ac4ae0]">now!</span></h1>
                </div>
                <div className="card bg-[#1f242d]  w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered bg-[#323946] text-gray-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-gray-300">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered bg-[#323946] text-gray-200" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#ac4ae0] text-white border-none">Login</button>
                            <p className="text-gray-300 pt-4">New here? <Link to='/signup'><span className="text-[#ac4ae0] font-bold cursor-pointer">Signup</span></Link> now!</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;