import { useState, useEffect } from "react";
import React from "react";
import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import fetchAPI from "../modules/fechapi";

const Form = ({setFilter, setStatus}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [myManufacter, setManufacter] = useState("Marca");

    const handleChange = (event) => {
        setManufacter(event.target.value)
    }

    const onSubmit = data => {
        console.log('Datos: ', data);
        // TODO Preparar y enviar datos del formulario al servidor.
        // TODO Actualizar status y datos

        setStatus(-1);
        setFilter('Hola');
        
    };

    const chrs = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s-]*\S$/;

    // TODO sin espacios al inicio y final
    // TODO si campos vacíos, desactivar botones

    return (
        <form name="formulario" onSubmit={handleSubmit(onSubmit)}>
        <div className="bg">

            <label htmlFor="model" className="sr">Modelo:</label>
            <input type="text" id="model" placeholder="modelo" autoFocus="autofocus"
                {...register('model', {
                    pattern: chrs
                })} />

            <label htmlFor="color" className="sr">Color:</label>
            <input type="text" id="color" placeholder="color"
                {...register('color', {
                    pattern: chrs
                })} />

            <label htmlFor="price" className="sr">Precio:</label>
            <input type="number" id="price" placeholder="precio" min="0"
                {...register('price', {
                    min: 1
                })} />

            <label htmlFor="brand" className="sr">Marca:</label>
            <select value={myManufacter} onChange={handleChange} id="brand"
                {...register('brand')}>
                <option value="Marca">--Marca--</option>
                <option value="Dos">Dos</option>
            </select>

            {errors.model?.type === 'pattern' && <p>Modelo incorrecto.</p>}
            {errors.color?.type === 'pattern' && <p>Color incorrecto.</p>}
            {errors.price && <p>Precio incorrecto.</p>}

        </div>
        <button id="borrar" type="reset">Borrar</button>
        <button id="enviar" type="send">Enviar</button>
    </form>
    )
}

export default Form;