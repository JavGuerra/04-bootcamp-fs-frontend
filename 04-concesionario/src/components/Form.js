import { useState, useEffect } from "react";
import React from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import fetchAPI from "../modules/fechapi";

const Form = ({ setFilter, setStatus }) => {

    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
    const chrs = /^[\da-zA-ZÀ-ÿ\u00f1\u00d1\s-]*\S$/;
    const url = 'http://localhost:3000/products/';

    useEffect(() => {
        fetchAPI(url, data => {
            setStatus(data.response_code);
            setFilter(data.result);
        });
    }, []);

    onreset = () => clearErrors();

    // TODO Preparar y enviar datos del formulario al servidor.
    // TODO Actualizar status y datos
    // TODO sin espacios al inicio y final
    // TODO si campos vacíos, desactivar botones

    const onSubmit = data => {
        console.log('Datos: ', data);
        axios.get(url).then(response => {
            setStatus(response.data.response_code);
            setFilter(response.data.result);
        });

        // fetchAPI(url, data => {
        //    setStatus(data.response_code);
        //    setFilter(data.result);
        // });

    };

    return (
        <form name="form" onSubmit={handleSubmit(onSubmit)}>
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
                <select className="select" id="brand" {...register('brand')}>
                    <option value="" selected="selected">--Marca--</option>
                </select>

                {errors.model?.type === 'pattern' && <p>Modelo incorrecto.</p>}
                {errors.color?.type === 'pattern' && <p>Color incorrecto.</p>}
                {errors.price && <p>Precio incorrecto.</p>}

            </div>
            <button id="reset" type="reset">Borrar</button>
            <button id="send" type="send">Enviar</button>
        </form>
    )
}

export default Form;