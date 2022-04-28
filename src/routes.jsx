import React from "react";
import { Routes as Server, Route, BrowserRouter } from "react-router-dom";
import { ContextProvider as SearchProvider } from "./contexts/contextSearch";

import Home from "./pages/Home/home";
import Login from "./pages/loginPage/login"
import Chat from "./pages/chat/chat"
import Search from './pages/searchPage/search'
import Profile from './pages/profile/profile'

const Routes = () => {
    return (
        <SearchProvider>
            <BrowserRouter>
                <Server>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path={`/profile/:id`} element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/chat/:id" element={<Chat />} />
                </Server>
            </BrowserRouter>
        </SearchProvider>
    )
}

export default Routes;