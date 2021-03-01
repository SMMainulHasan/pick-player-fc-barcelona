import React from 'react';
import './Team.css';

const Team = (props) => {
    const teamPlayer = props.teamPlayer;
    const totalTeamMember = teamPlayer.length
    const teamCost = teamPlayer.reduce((totalSalary, player) => totalSalary + Number(player.salary), 0);
    return (
        <div className="team">
            <h2>Team Member</h2>
            <h4>Team Member: {totalTeamMember}</h4>
            <p>Total Team Cost: <strong>${teamCost}</strong></p>
            <ol>
                {teamPlayer.map(player=><li>{player.name}</li>)}
            </ol>
            <br/>
            <p>Select total 11 players according to your need. You can choose your will play for goalkeeper, defender, midfielder and forward.Also you will get visual position of players. </p>
        </div>
    );
};

export default Team;