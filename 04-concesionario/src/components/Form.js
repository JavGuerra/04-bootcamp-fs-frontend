import { useState, useEffect } from "react";
import React from "react";
import axios from 'axios';
import fetchAPI from "../modules/fechapi";

const Form = ({setFilter, setStatus}) => {

    // TODO Todo por hacer aquí

    setFilter('Hola');
    setStatus(-1);

    const [myManufacter, setManufacter] = useState("Marca");

    const handleChange = (event) => {
        setManufacter(event.target.value)
    }

    return (
        <form name="formulario" action="#" method="get">
        <div className="bg">
            <label htmlFor="modelo" className="sr">Modelo:</label>
            <input type="text" id="modelo" name="modelo" placeholder="modelo" autoFocus="autofocus" />
            <label htmlFor="color" className="sr">Color:</label>
            <input type="text" id="color" name="color" placeholder="color" />
            <label htmlFor="precio" className="sr">Precio:</label>
            <input type="number" id="precio" name="precio" placeholder="precio" min="0" />
            <label htmlFor="marca" className="sr">Marca:</label>
            <select value={myManufacter} onChange={handleChange} id="marca" name="marca">
                <option value="Marca">--Marca--</option>
            </select>
        </div>
        <button id="borrar" type="reset">Borrar</button>
        <button id="enviar" type="send">Enviar</button>
    </form>
    )
}

export default Form;