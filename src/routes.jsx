import React from "react";
import { Routes as Server, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search-page"

const Routes = () => {
    return (
        <BrowserRouter>
            <div className="Routes">
            <Server>
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
            </Server>
            </div>
        </BrowserRouter>
    )
}

export default Routes;