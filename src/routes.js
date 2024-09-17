import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Produto from "./pages/produtos";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Produto/>}/> {}
            </Routes>
        </BrowserRouter>
    );
}
