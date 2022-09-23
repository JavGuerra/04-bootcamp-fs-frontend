import React from "react";
import { useForm } from 'react-hook-form';
import '../assets/css/styles.css';

const Formulario = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = data => {
        console.log('Datos: ', data);
        // Preparar y enviar datos del formulario al servidor.
    };

    const validarEdad = edad => edad >= 18 && edad <= 65;

    const hayCodigo = watch('hayCodigo');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <ul>
                <li>
                    <p>Usuario: {watch('nombre')}</p>
                </li>
                <li>
                    <label htmlFor="nombre">Nombre: </label>
                    <input type="text" id="nombre" {...register('nombre', {
                        required: true,
                        maxLength: 16
                    })} />
                </li>
                <li>
                    {errors.nombre?.type === 'required' && <p>El nombre es obligatorio.</p>}
                    {errors.nombre?.type === 'maxLength' && <p>El nombre es demasiado largo.</p>}
                </li>
                <li>
                    <label htmlFor="edad">Edad: </label>
                    <input type="number" id="edad" {...register('edad', {
                        validate: validarEdad
                    })} />
                </li>
                <li>
                    {errors.edad && <p>La edad debe estar entre 18 y 65 años.</p>}
                </li>
                <li>
                    <label htmlFor="correo">Correo: </label>
                    <input type="email" id="correo" {...register('correo', {
                        pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i
                    })} />
                </li>
                <li>
                    {errors.correo?.type === 'pattern' && <p>El formato del correo es incorrecto.</p>}
                </li>
                <li>
                    <label htmlFor="hayCodigo">Código promocional: </label>
                    <input type="checkbox" id="hayCodigo" {...register('hayCodigo')} />
                </li>
                <li>
                    {hayCodigo && <input type="text" id="codigo" {...register('codigo', {
                        maxLength: 8
                    })} />}
                </li>
                <li>
                    {errors.codigo?.type === 'maxLength' && <p>El código es demasiado largo.</p>}
                </li>
                <li>
                    <input type="submit" value="Enviar" />
                </li>
            </ul>

        </form>
    )
}

export default Formulario;