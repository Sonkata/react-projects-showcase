import { Outlet } from "react-router";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

function Layout() {
    return (
        <main className="app">
            <ScrollToTop />

            <Navbar />

            <Outlet />
        </main>
    );
}

export default Layout;