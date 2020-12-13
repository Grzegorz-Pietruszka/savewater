import React, {FC} from 'react';
import icons from "../../icons/icons";
import {BrowserRouter as Router, Link} from "react-router-dom";
import './Footer.scss'

const Footer: FC = () => {
    return (
        <Router>
            <div className='footer-wrapper'>
                <div className='footer-inner'>
                    <div className='menu-wrapper'>
                        <ul className='footer-menu'>
                            <li>
                                <Link to='/FAQs'>FAQs</Link>
                            </li>
                            <li>
                                <Link to='/terms'>Terms of use</Link></li>
                            <li>
                                <Link to='/policies'>Other policies</Link>
                            </li>
                            <li>
                                <Link to='/agreemnet'>User License Agreement</Link>
                            </li>
                            <li>
                                <Link to='/contanctus'>Contact us</Link>
                            </li>
                            <li>
                                <Link to='/privacypolicy'>Privacy policy</Link>
                            </li>
                            <li>
                                <Link to='/cookiepolicy'>Cookie policy</Link>
                            </li>
                        </ul>
                        <div>
                            <img src={icons.logo} alt=""/>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <div>
                            <p>Deliverd by experts in water efficiency since 2007</p>
                            <p>Copyright <span>&#169;  </span>
                                {new Date().getFullYear()} Save Water Save Money Ltd. All rights
                                reserved.
                                Patent Pending</p>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default Footer;
