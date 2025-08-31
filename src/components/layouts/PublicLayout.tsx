
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PublicLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default PublicLayout;
