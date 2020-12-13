import React, {FC} from 'react';
import './Donate.scss'

const Donate: FC = () => {
    return (
        <div className='donate-wrapper'>
            <h2>Donate and support with coins</h2>
            <div className='text-wrapper'>
                <div className='donate-col'>
                    <h4>You've earned</h4>
                    <span id='earn-coins'>1500 coins</span>
                    <a href="/">How to earn?</a>
                </div>

                <div className='donate-col'>
                    <h4>Support a team</h4>
                    <p>Simply choose on of the teams to support. All the litres you save will then be allocated to that
                        team. After 31st October 2020</p>
                    <a href="/">Read more</a>
                </div>

                <div className='donate-col'>
                    <h4>Donate my coins</h4>
                    <p>Donate the coins you have earne to one of the six charities. SaveWaterSaveMoney will then donate
                        £1,000 in the same...</p>
                    <a href="/">Read more</a>
                </div>
            </div>
        </div>
    );
};

export default Donate;
