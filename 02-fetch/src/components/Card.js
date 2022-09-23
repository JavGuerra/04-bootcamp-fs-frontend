import React from "react";
import '../assets/css/styles.css';

const Card = ({name, pokemon}) => {

    console.log(pokemon);

    //const imageUrl = pokemon.sprites.front_default;

    return (
        <div id="card">
            <h1>{name}</h1>
            {/* <img src={imageUrl} alt={name} /> */}
        </div>
    )
}

export default Card;