import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ForgotPassword = () => {
    const location = useLocation();
    return (
        <div>
            <title>Forgot Password</title>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section className="max-w-7xl mx-auto my-36">
                    <div className="flex flex-col items-center gap-3">
                    
                    <input type="email" placeholder="Email" defaultValue={location.state} required className="input focus:outline-0" />
            
                    <button onClick={()=>window.open('https://mail.google.com', '_blank')} className="btn btn-accent">Reset Password</button>
                    </div>
                </section>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default ForgotPassword;