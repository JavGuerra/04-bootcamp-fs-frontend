import { useState, useEffect } from "react";
import Card from "./Card";
import pokemonsList from "../modules/pokemonsList";
import fetchAPI from "../modules/fechapi";

let index = 0;

const Button = () => {

    const [loading, setLoading] = useState(true);
    const [currentPokemonName, setPokemonName] = useState(pokemonsList[0]);
    const [currentPokemon, setPokemon] = useState({});

    useEffect (() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonName}`;
        fetchAPI(url, data => {
                setPokemon(data);
                setLoading(false);
            });
    }, [currentPokemonName]);

    const buttonClick = () => { 
        index = (index < pokemonsList.length - 1) ? ++index : 0;
        setPokemonName(pokemonsList[index]);
    };

    if (!loading) return (
        <>
            <Card pokemon={currentPokemon} />
            <button id="btn" onClick = {buttonClick}> → </button>
        </>
    )

}

export default Button;