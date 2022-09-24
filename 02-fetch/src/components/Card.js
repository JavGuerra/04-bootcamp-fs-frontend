import React from "react";
import '../assets/css/styles.css';

const Card = ({pokemon}) => {

    console.log(pokemon);

    return (
        <div id="card" className="zoom">
            <img className="imgPkm"
                src={pokemon.sprites.front_default}
                alt={pokemon.name} />
            <h2>{pokemon.name}</h2>
        </div>
    )
}

export default Card;