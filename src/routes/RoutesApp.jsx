import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import MyJob from "../pages/MyJob";

const RoutesApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="myjob" element={<MyJob />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default RoutesApp