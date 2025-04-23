import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
    const [show, setShow] = useState(false);
    const { signIn } = useContext(AuthContext);

    // login
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password')
        signIn(email, password)
        .then(()=>{
            toast.success('Login Success')
        })
        .catch(()=>{
            toast.error('Login failed. try again with valid email & password');
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