import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeView from "./view/HomeView";


const App = () => {
    // useEffect(() => {
    //     smooth();
    //     link();
    // }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;