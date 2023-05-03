import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Homepage } from "../pages/Homepage";
import { Aboutpage } from "../pages/Aboutpage";
import { Projectspage } from "../pages/Porjetcpage";

export function Router() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/sobre" element={<Aboutpage />} />
                    <Route path="/projetos" element={<Projectspage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
