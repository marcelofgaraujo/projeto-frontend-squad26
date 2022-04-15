import React from "react";
import { Routes as Server, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/loginPage/Login"
import Chat from "./pages/chat/Chat"
import SearchAcessibilidade from './pages/Search-page/searchs-estáticos/search-acessibilidade'
import SearchFigma from './pages/Search-page/searchs-estáticos/search-figma'
import SearchNode from './pages/Search-page/searchs-estáticos/search-node'
import ProfileMaria from './pages/profiles/profileMaria'
import ProfileLuciana from './pages/profiles/profileLuciana'
import ProfileBianca from './pages/profiles/ProfileBianca'

const Routes = () => {
    return (
        <BrowserRouter>
            <Server>
                <Route path="/home" element={<Home />} />    
                <Route path="/login" element={<Login />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/profile-maria" element={<ProfileMaria/>}/>
                <Route path='/profile-luciana' element={<ProfileLuciana/>}/>
                <Route path="/profile-bianca" element={<ProfileBianca/>}/>
                <Route path='/search-acessibilidade' element={<SearchAcessibilidade />} />
                <Route path='/search-figma' element={<SearchFigma />} />
                <Route path="/search-node" element={<SearchNode />}/>
            </Server>
        </BrowserRouter>
    )
}

export default Routes;