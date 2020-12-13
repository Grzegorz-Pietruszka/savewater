import React, {Props} from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main: React.FC<Props<object>> = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
};

export default Main;
