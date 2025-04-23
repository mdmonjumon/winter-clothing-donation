import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    // show password state
    const [show, setShow] = useState(false);
    // context
    const { createNewUser } = useContext(AuthContext);
    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email')
        const password = form.get('password')


        createNewUser(email, password)
        .then(()=>{
            toast('Register success')
            navigate('/')
        })
        .catch(()=>{
            toast('Registration failed. try again with valid information');
        })


    }

    return (
        <div className="my-24 max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center my-10">Register now!</h1>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleRegister} action="">
                        <fieldset className="space-y-4">
                            <div>
                                <label className="text-lg">Name</label>
                                <input type="text" name='name' className="input w-full" placeholder="Name" />
                            </div>


                            <div>
                                <label className="text-lg">Photo URL</label>
                                <input type="text" name='photo' className="input w-full" placeholder="Photo url" />
                            </div>

                            <div>
                                <label className="text-lg">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Email" />
                            </div>

                            <div className='relative'>
                                <label className="text-lg">Password</label>
                                <input type={show ? 'text' : 'password'} name='password' className="input w-full" placeholder="Password" />

                                {
                                    show ?
                                        <FaEyeSlash onClick={() => setShow(!show)} className='text-3xl absolute z-20 right-4 top-[33px] cursor-pointer' />
                                        :
                                        <FaEye onClick={() => setShow(!show)} className='text-3xl absolute z-20 right-4 top-[33px]' />
                                }

                            </div>

                            <button className="btn btn-neutral w-full mt-4">Register</button>
                        </fieldset>
                    </form>
                </div>
            </div>
            <p className="text-lg mt-8">Already have an account? <Link to='/login' className="text-rose-600">Login</Link></p>

        </div>
    );
};

export default Register;