import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <NavBar />
            </nav>
            <Outlet />
        </>
    )
}

export default Layout;