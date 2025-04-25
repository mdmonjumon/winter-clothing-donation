import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="max-w-7xl mx-auto my-32 min-h-[calc(100vh-625px)] flex flex-col items-center">
            <h2 className="text-xl font font-semibold text-stone-700">Welcome! {user?.displayName}</h2>

            <div className="flex flex-col items-center mt-10">
                <img className="w-40 h-40 size-full object-cover border-2 rounded-full" src={user?.photoURL} alt="" />
                <h2 className="text-xl font font-semibold text-stone-700 my-3">Name: {user?.displayName}</h2>
                <p className="text-lg">Email: {user?.email}</p>
            </div>

            <button className="btn btn-outline text-lg mt-10">Edit Profile</button>

        </div>
    );
};

export default Dashboard;