import React from 'react';
import './FieldFormat.css';

const FieldFormat = (props) => {
    const teamPlayer = props.teamPlayer;
    return (
        <div className="container-div">
            <div className="format">
                {
                    teamPlayer.map(player => {
                        const position = player.position;
                        if (position === "Goalkeeper") {
                            return <img src={player.image} alt=""/>
                        }
                    })
                }
            </div>
            <div className="format">
            {
                    teamPlayer.map(player => {
                        const position = player.position;
                        if (position === "ForDefenderward") {
                            return <img src={player.image} alt=""/>
                        }
                    })
                }
            </div>
            <div className="format">
            {
                    teamPlayer.map(player => {
                        const position = player.position;
                        if (position === "Midfielder") {
                            return <img src={player.image} alt=""/>
                        }
                    })
                }
            </div>
            <div className="format">
            {
                    teamPlayer.map(player => {
                        const position = player.position;
                        if (position === "Forward") {
                            return <img src={player.image} alt=""/>
                        }
                    })
                }
            </div>
        </div>
    );
};

export default FieldFormat;