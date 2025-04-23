import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn, singInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // login
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password')

        signIn(email, password)
            .then(() => {
                navigate(location.state ? location.state : '/');
            })
            .catch(() => {
                toast.error('Login failed. try again with valid email & password');
            })

    }

    const handleLoginWithGoogle = () => {
        singInWithGoogle()
            .then(() => {
                navigate(location.state ? location.state : '/');
            })
            .catch(() => {
                toast.error('Login failed! try again');
            })
    }



    return (
        <div className="my-24 max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center my-10">Login now!</h1>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleLogin} action="">
                        <fieldset className="space-y-4">
                            <div>
                                <label className="text-lg">Email</label>
                                <input type="email" name="email" className="input w-full" placeholder="Email" />
                            </div>

                            <div className='relative'>
                                <label className="text-lg">Password</label>
                                <input type={show ? 'text' : 'password'} name="password" className="input w-full" placeholder="Password" />

                                {
                                    show ?
                                        <FaEyeSlash onClick={() => setShow(!show)} className='text-3xl absolute z-20 right-4 top-[33px] cursor-pointer' />
                                        :
                                        <FaEye onClick={() => setShow(!show)} className='text-3xl absolute z-20 right-4 top-[33px]' />
                                }

                            </div>

                            <div>
                                <span className="underline cursor-pointer">Forget Password</span>
                            </div>

                            <button className="btn btn-accent w-full mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>
            <p className="text-lg mt-8">Don't have an account? <Link to='/register' state={location.state} className="text-rose-600">Register</Link></p>

            <div>
                <button onClick={handleLoginWithGoogle} className="btn btn-accent text-lg my-4">
                    <FaGoogle className='text-lg' /> Login with Google</button>
            </div>

        </div>
    );
};

export default Login;