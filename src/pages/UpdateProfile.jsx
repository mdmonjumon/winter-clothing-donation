import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const navigate = useNavigate()

    const { updateUserProfile, user } = useContext(AuthContext);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get('name');
        const photo = form.get('photo');

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                navigate('/dashboard')
            })
    }

    return (
        <div>
            <title>Edit Profile</title>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <section className="my-24 max-w-7xl mx-auto flex flex-col items-center">

                    <h1 className="text-5xl font-bold text-center my-10">Update Profile Form</h1>

                    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl">
                        <div className="card-body">
                            <form onSubmit={handleUpdateProfile} action="">
                                <fieldset className="space-y-4">
                                    {/* update name */}
                                    <div>
                                        <label className="text-lg">Name</label>
                                        <input type="text" name='name' className="input w-full" placeholder="Name" defaultValue={user?.displayName} required />
                                    </div>

                                    {/* update photo by url */}
                                    <div>
                                        <label className="text-lg">Photo URL</label>
                                        <input type="text" name='photo' className="input w-full" placeholder="Photo url" defaultValue={user?.photoURL} required />
                                    </div>
                                    <button className="btn btn-accent w-full mt-4">Update</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>


                </section>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateProfile;