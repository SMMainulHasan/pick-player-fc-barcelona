import React from 'react';
import './PlayerCard.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const PlayerCard = (props) => {
    const { name, image, position, email, salary } = props.playerData;
    return (
        <div className="player-card">
            <div>
                <img src={image} alt="" />
                <br />
                <button
                    className='btn btn-success'
                    onClick={() => props.addToTeamEvent(props.playerData)}>
                    <FontAwesomeIcon icon={faUserPlus} /> add to team
                </button>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{email}</p>
                <p><strong>{position}</strong></p>
                <p>Yearly Salary ${salary}</p>
            </div>
        </div>
    );
};

export default PlayerCard;