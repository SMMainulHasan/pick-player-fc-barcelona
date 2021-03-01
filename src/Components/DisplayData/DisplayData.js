import React from 'react';
import { useState } from 'react';
import playersData from '../../data/players_data.json';
import FieldFormat from '../Field-format/FieldFormat';
import PlayerCard from '../PlayerCard/PlayerCard';
import Team from '../Team/Team';
import './DisplayData.css';

const DisplayData = () => {
    const [teamPlayer, setTeamPlayer] = useState([])
    const addToTeamEvent = (player) => {
        const newTeam = [...teamPlayer, player];
        setTeamPlayer(newTeam);
    };
    return (
        <div className= "display-Data">
            <div className= "players-list">
                {
                    playersData.map(player => <PlayerCard playerData={player} key={player.id} addToTeamEvent={addToTeamEvent}></PlayerCard>)
                }
            </div>
            <div>
                <Team teamPlayer={teamPlayer}></Team>
            </div>
            <div className="field">
            <FieldFormat teamPlayer={teamPlayer}></FieldFormat>
            </div>
        </div>
    );
};

export default DisplayData;