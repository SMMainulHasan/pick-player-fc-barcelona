import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import './Team.css';

const Team = (props) => {
    const teamPlayer = props.teamPlayer;
    const totalTeamMember = teamPlayer.length
    const teamCost = teamPlayer.reduce((totalSalary, player) => totalSalary + Number(player.salary), 0);
    return (
        <div className="team">
            <h2>Team</h2>
            <h4>Total Team Member: {totalTeamMember}</h4>
            <p><strong>Team Cost: ${teamCost}</strong></p>
            <ol>
                {teamPlayer.map(player=><li>{player.name}</li>)}
            </ol>
        </div>
    );
};

export default Team;