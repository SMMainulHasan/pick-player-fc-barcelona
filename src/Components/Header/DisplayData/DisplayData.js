import React from 'react';
import playersData from '../../../data/players_data.json';

const DisplayData = () => {
    console.log(playersData);
    return (
        <div>
            {
                playersData.map(player => <li>{player.name}</li>)
            }
        </div>
    );
};

export default DisplayData;