import React, {FC} from 'react';
import {useGlobalContext} from "../../Context";
import {BrowserRouter as Router, Link} from "react-router-dom";
import './Banner.scss'


const Banner: FC = () => {
    const {banner} = useGlobalContext();
    const {title, pretitle, description, image, buttonText, buttonPath} = banner;

    return (
        <div className='banner'>
            <div className='banner-wrapper'>
                <div>
                    <img src={image} alt='saving water kit'/>
                </div>
                <div className='text-wrapper'>
                    <h2>{pretitle}</h2>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Router>
                        <button>
                            <Link to={buttonPath}>{buttonText}</Link>
                        </button>
                    </Router>
                </div>
            </div>
        </div>
    );
};

export default Banner;
