import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Card(props){

    return (
        <div className="wrap-card"  >
            <div className="card"  id="testbutton">
                <div className="front-card" >
                    <img src={props.pokemon.sprite} alt="pokemon"/>
                </div>
                <div className="back-card">
                    <h2>{props.pokemon.name.english}</h2>
                    <div className="list-powers">
                        <div className="linearProgress">
                            <h3>HP</h3>
                            <LinearProgress variant="determinate" value={props.powerPokemon.HP} />
                        </div>
                        <div className="linearProgress">
                            <h3>Attack</h3>
                            <LinearProgress variant="determinate" value={props.powerPokemon.Attack} />
                        </div>
                        <div className="linearProgress">
                            <h3>Defense</h3>
                            <LinearProgress variant="determinate" value={props.powerPokemon.Defense} />
                        </div>
                        <div className="linearProgress">
                            <h3>Speed</h3>
                            <LinearProgress variant="determinate" value={props.powerPokemon.Speed} />
                        </div>
                        {/* <ul>
                            <li>HP: {props.powerPokemon.HP}</li>
                            <li>Attack: {props.powerPokemon.Attack}</li>
                            <li>Defense: {props.powerPokemon.Defense}</li>
                            <li>Speed: {props.powerPokemon.Speed}</li>
                        </ul> */}
                    </div>
                    <div className="btn-power">
                        {props.pokemon.type.map(type => {
                            return <span className={`types ${type}`}>{type}</span> 
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}