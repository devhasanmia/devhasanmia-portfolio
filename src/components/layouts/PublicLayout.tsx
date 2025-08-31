
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PublicLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1 max-w-4xl mx-auto w-full p-6">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default PublicLayout;
