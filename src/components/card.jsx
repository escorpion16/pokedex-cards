import React from 'react';

export default function Card(props){

    return (
        <div className="wrap-card">
            <div className="card">
                <div className="front-card">
                    <img src={props.pokemon.sprite} alt="pokemon"/>
                </div>
                <div className="back-card">
                    <h2>{props.pokemon.name.english}</h2>
                    <div>
                        <ul>
                            <li>HP: {props.powerPokemon.HP}</li>
                            <li>Attack: {props.powerPokemon.Attack}</li>
                            <li>Defense: {props.powerPokemon.Defense}</li>
                            <li>Speed: {props.powerPokemon.Speed}</li>
                        </ul>
                    </div>
                    <div >
                        {props.pokemon.type.map(type => {
                            return <span className={`types ${type}`}>{type}</span> 
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}