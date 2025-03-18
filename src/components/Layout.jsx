import React from "react"
import { Outlet, Link } from "react-router-dom"
import { useTheme } from "../themes/ThemeContext"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
    const { theme } = useTheme()
    return (
        <section className={`App ${theme}`}>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}

export default Layout