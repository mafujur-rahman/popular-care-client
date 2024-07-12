import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import FooterSection from "./Footer/Footer";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default Home;