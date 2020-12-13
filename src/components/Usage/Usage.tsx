import React, {FC} from 'react';
import {useGlobalContext} from "../../Context";
import Button from "../Button/Button";
import UsageCard from "../UsageCard/UsageCard";
import './Usage.scss'

const Usage: FC = () => {
    const {usages} = useGlobalContext();

    return (
        <div className='usage-wrapper'>
            <h2>My annual water and energy use</h2>
            <div className='usage-cards'>
                {usages.map((usage) => <UsageCard key={usage.id} usage={usage}/>)}
            </div>
            <Button>Show my usage</Button>
        </div>
    );
};

export default Usage;
