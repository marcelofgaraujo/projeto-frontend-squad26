import React from "react";
import { Routes as Server, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Search from "./pages/Search-page/Search"
import Profile from "./pages/profile/Profile"
import Login from "./pages/loginPage/Login"
import Chat from "./pages/chat/Chat"

const Routes = () => {
    return (
        <BrowserRouter>
            <Server>
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/chat" element={<Chat />} />
            </Server>
        </BrowserRouter>
    )
}

export default Routes;