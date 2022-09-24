import { useState, useEffect } from "react";
import Card from "./Card";
import pokemonsList from "../modules/pokemonsList";

let index = 0;

const Button = () => {

    const [currentPokemonName, setPokemonName] = useState(pokemonsList[0]);
    const [currentPokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${currentPokemonName}`;
        const newPokemon = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setPokemon(data);
                setLoading(false);
            } catch (err) { console.log(err)};
        }
        newPokemon();
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