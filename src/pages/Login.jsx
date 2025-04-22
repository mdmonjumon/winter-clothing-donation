import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Login = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="my-24 max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center my-10">Login now!</h1>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl">
                <div className="card-body">
                    <form action="">
                        <fieldset className="space-y-4">
                            <div>
                                <label className="text-lg">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" />
                            </div>

                            <div className='relative'>
                                <label className="text-lg">Password</label>
                                <input type={show ? 'text' : 'password'} className="input w-full" placeholder="Password" />

                                {
                                    show ?
                                        <FaEyeSlash onClick={() => setShow(!show)} className='text-3xl absolute z-20 right-4 top-[33px] cursor-pointer' />
                                        :
                                        <FaEye onClick={() => setShow(!show)} className='text-3xl absolute z-20 right-4 top-[33px]' />
                                }

                            </div>

                            <button className="btn btn-neutral w-full mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
            <p className="text-lg mt-8">Don't have an account? <Link to='/register' className="text-rose-600">Register</Link></p>

        </div>
    );
};

export default Login;