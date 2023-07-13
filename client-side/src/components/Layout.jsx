import { Outlet } from "react-router-dom"
import NavScrollExample from "./Navbar"


const Layout = () => {
    return(
        <>
            <NavScrollExample/>
            <Outlet/>
        </>
    )
}

export default Layout