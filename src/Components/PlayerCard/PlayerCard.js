import React from 'react';
import './PlayerCard.css';

const PlayerCard = (props) => {
const {name, image, position, email, salary} = props.playerData;
    console.log(props);
    return (
        <div className="player-card">
            <h1>{name}</h1>
            <img src={image} alt=""/>
        </div>
    );
};

export default PlayerCard;