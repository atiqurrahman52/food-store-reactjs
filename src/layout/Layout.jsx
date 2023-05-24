import { Outlet } from "react-router-dom";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";

const Layout = () => {
    return (
        <div>
            <Navbar />
             <Outlet />
            <Footer />
            
        </div>
    );
};

export default Layout; 