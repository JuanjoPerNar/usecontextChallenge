import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/myjob'>MyJob</Link>
                    </li>
                </ul>
            </nav>
            <Button />
        </header>
    )
}

export default Header