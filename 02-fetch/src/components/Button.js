import { useState, useEffect } from "react";
import Card from "./Card";
import fetchAPI from "../modules/fechapi";
import pokemonsList from "../modules/pokemonsList";

let index = 0;

const Button = () => {

    const [currentPokemonName, setPokemonName] = useState(pokemonsList[0]);
    const [currentPokemon, setPokemon] = useState({});

    useEffect (() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonName}`;
        fetchAPI(url, data => setPokemon(data));
    }, [currentPokemonName]);

    const buttonClick = () => { 
        index = (index < pokemonsList.length - 1) ? ++index : 0;
        setPokemonName(pokemonsList[index]);
    };

    return (
        <div>
            <Card name={currentPokemonName} data={currentPokemon} />
            <button id="btn" onClick = {buttonClick}> » </button>
        </div>
    )
}

export default Button;