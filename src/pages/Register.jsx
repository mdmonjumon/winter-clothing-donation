import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle, } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register = () => {
    // show password state
    const [show, setShow] = useState(false);

    // error state manage
    const [error, setError] = useState('');

    // context
    const { createNewUser, updateUserProfile, singInWithGoogle, passwordValidation } = useContext(AuthContext);
    const navigate = useNavigate()

    const location = useLocation();


    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        const validPassword = passwordValidation(password);
        if (validPassword) {
            return setError(validPassword);
        }
        createNewUser(email, password)
            .then(() => {
                setError('');

                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                    })
            })
            .catch(() => {
                toast.error('Registration failed. try again with valid information');
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
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section className="my-24 max-w-7xl mx-auto flex flex-col items-center">
                    <h1 className="text-5xl font-bold text-center my-10">Register now!</h1>
                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister} action="">
                                <fieldset className="space-y-4">
                                    <div>
                                        <label className="text-lg">Name</label>
                                        <input type="text" name='name' className="input w-full" placeholder="Name" required />
                                    </div>


                                    <div>
                                        <label className="text-lg">Photo URL</label>
                                        <input type="text" name='photo' className="input w-full" placeholder="Photo url" required />
                                    </div>

                                    <div>
                                        <label className="text-lg">Email</label>
                                        <input type="email" name='email' className="input w-full" placeholder="Email" required />
                                    </div>

                                    <div className='relative'>
                                        <label className="text-lg">Password</label>
                                        <input type={show ? 'text' : 'password'} name='password' className="input w-full" placeholder="Password" required />

                                        {
                                            show ?
                                                <FaEyeSlash onClick={() => setShow(!show)} className='text-3xl absolute z-20 right-4 top-[33px] cursor-pointer' />
                                                :
                                                <FaEye onClick={() => setShow(!show)} className='text-3xl absolute z-20 right-4 top-[33px]' />
                                        }

                                    </div>

                                    <div>
                                        <p className='text-sm text-rose-600'>{error}</p>
                                    </div>

                                    <button className="btn btn-accent w-full mt-4">Register</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <p className="text-lg mt-8">Already have an account? <Link to='/login' className="text-rose-600">Login</Link></p>


                    <div>
                        <button onClick={handleLoginWithGoogle} className="btn btn-accent text-lg my-4">
                            <FaGoogle className='text-lg' /> Sign up with Google</button>
                    </div>


                </section>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default Register;