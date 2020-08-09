import React from 'react';

export default function Card(props){

    return (
        <div className="card">
            <h2>{props.pokemon.name.english}</h2>
            <img src={props.pokemon.sprite} alt="pokemon"/>
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
    )
}