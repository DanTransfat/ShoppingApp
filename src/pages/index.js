import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "./Home"
import Cart from "../components/CartComp"

const Navbar = () => {
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<SignIn />}
                    />
 
                    <Route
                        path="/signup"
                        element={<SignUp />}
                    />
                    <Route
                        path="/home"
                        element={<Home />}
                    />
                    <Route
                        path="/cart"
                        element={<Cart />}
                    />
                </Routes>
            </Router>
        </>
        // <div>
        //     <SignIn></SignIn>
        // </div>
    );
};

export default Navbar;