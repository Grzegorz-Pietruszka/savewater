import React, {FC} from 'react';
import {IUsages} from "../../interfacesTS/interfaces";
import './UsageCard.scss'

interface IUsageCardProps {
    usage: IUsages
}

const UsageCard: FC<IUsageCardProps> = ({usage}) => {
    const {description, icon, saving} = usage;

    return (
        <div className='card'>
            <img src={icon} alt={description}/>
            <div>
                {saving.water && <div>
                    <h4>{saving.water} Liters</h4>
                    <span id='water-money'>£{saving.money}</span>
                    <p>{description}</p>
                </div>}
                {saving.energy && <div>
                    <h4>{saving.energy} kWh</h4>
                    <span id='energy-money'>£{saving.money}</span>
                    <p>{description}</p>
                </div>}
            </div>
        </div>
    );
};

export default UsageCard;
