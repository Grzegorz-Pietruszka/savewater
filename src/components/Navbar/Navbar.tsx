import React, {FC} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import './Navbar.scss'
import icons from "../../icons/icons";

const Navbar: FC = () => {
    const {logo} = icons;

    return (
        <nav>
            <div className='navbar-wrapper'>
                <Router>
                    <Link to='/savingkit'>
                        <img src={logo} id='logo' alt="logo"/>
                    </Link>
                    <div className='menu-wrapper'>
                        <li>
                            <Link to='/'>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to='/member'>
                                Member portal +
                            </Link>
                        </li>
                        <li>
                            <Link to='/my consumption'>
                                My consumption
                            </Link>
                        </li>
                        <li>
                            <Link to='/account'>
                                Account
                            </Link>
                        </li>

                    </div>
                </Router>
            </div>
        </nav>
    );
};

export default Navbar;
