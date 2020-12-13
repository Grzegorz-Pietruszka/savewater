import React, {FC} from 'react';
import icons from "../../icons/icons";
import './CurrentUsage.scss';

const CurrentUsage: FC = () => {
    const {droplet, energy, coin} = icons;

    return (
        <div className='current-usage'>
            <div className='current-wrapper'>
                    <span>Current usage:</span>
                    <span>
                        <img src={droplet} alt=""/>
                            115 liters
                    </span>
                    <span id='energy'>
                        <img src={energy} alt=""/>
                            1469 kWh
                    </span>
                <span>
                        <img src={coin} alt=""/>
                           2200
                    </span>
            </div>
        </div>
    );
};

export default CurrentUsage;
