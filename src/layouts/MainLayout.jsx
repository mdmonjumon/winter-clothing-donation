import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/Loading";


const MainLayout = () => {

    const {loading} = useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main className="px-2">
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>



            {/* toast */}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default MainLayout;