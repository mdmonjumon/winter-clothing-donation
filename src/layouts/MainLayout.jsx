import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";



const MainLayout = () => {
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