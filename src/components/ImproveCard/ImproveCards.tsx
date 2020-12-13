import React, {FC} from 'react';
import {IChallenge} from "../../interfacesTS/interfaces";
import icons from "../../icons/icons";
import './ImproveCards.scss'

interface IImproveCardProps {
    challenge: IChallenge
}

const ImproveCard: FC<IImproveCardProps> = ({challenge}) => {
    const {title, description, icon, saving} = challenge;
    const {droplet, coin} = icons;

    return (
        <div className='card-wrapper'>
            <div className='card-top'>
                <img src={icon} alt={description}/>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>

            <div className='card-bottom'>
                <div>
                    {saving.water && <div>
                        <img src={droplet} alt=""/>
                        <span>{saving.water}</span>
                    </div>}
                </div>

                <div>
                    {saving.money && <div>
                        <img src={coin} alt=""/>
                        <span>{saving.money}</span>
                    </div>}
                </div>

            </div>
        </div>
    );
};

export default ImproveCard;
