import React from 'react';
import playersData from '../../data/players_data.json';
import PlayerCard from '../PlayerCard/PlayerCard';

const DisplayData = () => {
    console.log(playersData);
    return (
        <div>
            <ol>
            {
                playersData.map(player => <PlayerCard playerData={player} key={player.id}></PlayerCard>)
            }
            </ol>
        </div>
    );
};

export default DisplayData;