import NavBar from "../../components/NavBar";
import { Routes, Route } from "react-router-dom";
import CatalanLanding from "./Landing";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
    return <>
        {/* <NavBar /> */}
        <Routes>
            <Route path="/" element={<CatalanLanding />} />
            <Route path="/contacte" element={<Contact />} />
            <Route path="/projectes" element={<Projects />} />
        </Routes>
    </>

}