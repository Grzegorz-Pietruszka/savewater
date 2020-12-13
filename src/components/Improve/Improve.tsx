import React, {FC} from 'react';
import {useGlobalContext} from "../../Context";
import Button from "../Button/Button";
import ImproveCard from "../ImproveCard/ImproveCards";
import './Improve.scss';

const Improve: FC = () => {
    const {challenges} = useGlobalContext();

    return (
        <div className='improve-wrapper'>
            <h2>Improve & save</h2>
            <p>By takin up fun water and energy saving challenges you can reduce your annual bill, earn coins and donate
                them to charity of your choice or support your local team! <a href="/#">How does that work?</a></p>
            <div className='cards-wrapper'>
                {challenges.map((challenge) => <ImproveCard key={challenge.id} challenge={challenge}/>)}
            </div>
            <Button>Show all changes</Button>
        </div>

    );
};

export default Improve;
