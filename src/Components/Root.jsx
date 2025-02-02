import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;