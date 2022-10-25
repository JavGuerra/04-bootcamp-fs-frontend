import { useState, useEffect, useRef } from "react";
import { useForm } from 'react-hook-form';
import useConfig from '../hooks/useConfig';
import inactiveBtn from '../modules/inactiveBtn';
import setSpin from '../modules/setSpin';
import axios   from 'axios';

const Form = ({ setStatus, setData }) => {

    const [manufacturers, setManufacturers] = useState([]);
    const { url } = useConfig();
    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm();
    const clear = value => (value === undefined) ? '' : value.trim();
    const chars = /^[\da-zA-ZÀ-ÿ\u00f1\u00d1\s-]*\S$/;
    const sendBtnRef = useRef(); // document.getElementById('send');

    /**
     * Hace una consulta a la url de la API y obtiene dataStatus y filteredData
     * @param {string} url 
     */
    const searchAndUpdate = url => {
        inactiveBtn(sendBtnRef.current, true);
        setSpin(true);
        axios.get(url)
            .then(response => {
                setStatus(response.data.response_code); //dataStatus
                setData(response.data.result);          //filteredData
            })
            .catch(error => {
                setStatus(-1); // Devuelve error (-1) a dataStatus
                if (error.response) {
                    // La respuesta fue hecha y el servidor respondió con un 
                    // código de estado que esta fuera del rango de 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // La petición fue hecha pero no se recibió respuesta
                    // `error.request` es una instancia de XMLHttpRequest en el
                    // navegador y una instancia de http.ClientRequest en node.js
                    console.log(error.request);
                } else {
                    // Algo paso al preparar la petición que lanzo un Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        setSpin(false);
        inactiveBtn(sendBtnRef.current, false);
    }

    useEffect(() => {
        axios.get(url + 'manufacturers/')
            .then(response => setManufacturers(response.data.result)) // Fabricantes
            .catch(error => console.log('Error: ', error.message));
        searchAndUpdate(url + 'products/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Botón reset
    onreset = () => {
        clearErrors();
        reset({ model: '', color: '', price: '', brand: '' });
        searchAndUpdate(url + 'products/');
    };

    // Botón send
    const onSubmit = data => {
        const params = `?modelo=${clear(data.model)}&color=${clear(data.color)}`
            + `&precio=${clear(data.price)}&marca=${clear(data.brand)}`;
        searchAndUpdate(url + 'search/' + params);
    };

    return (
        <form name="form" onSubmit={handleSubmit(onSubmit)}>

            <div className="bg">

                <label htmlFor="model" className="sr">Modelo:</label>
                <input type="text" id="model" placeholder="modelo"
                    {...register('model', {
                        pattern: chars
                    })} autoFocus="autofocus" />

                <label htmlFor="color" className="sr">Color:</label>
                <input type="text" id="color" placeholder="color"
                    {...register('color', {
                        pattern: chars
                    })} />

                <label htmlFor="price" className="sr">Precio:</label>
                <input type="number" id="price" placeholder="precio" min="0"
                    {...register('price', {
                        min: 1
                    })} />

                <label htmlFor="brand" className="sr">Marca:</label>
                <select className="select" id="brand" defaultValue=""
                    {...register('brand')}>
                    <option value="" disabled>--Fabricante--</option>
                    {/* Listado de fabricantes */}
                    {manufacturers.map((manufacturer, index) =>
                        <option key={index} value={manufacturer.cif}>
                            {manufacturer.name}
                        </option>)}
                </select>

                <p className="required">
                    {errors.model?.type === 'pattern' &&
                        <span>&nbsp;(&nbsp;!&nbsp;)&nbsp;Modelo&nbsp;incorrecto.&nbsp; </span>}
                    {errors.color?.type === 'pattern' &&
                        <span>&nbsp;(&nbsp;!&nbsp;)&nbsp;Color&nbsp;incorrecto.&nbsp; </span>}
                    {errors.price &&
                        <span>&nbsp;(&nbsp;!&nbsp;)&nbsp;Precio&nbsp;incorrecto.&nbsp; </span>}
                </p>

            </div>

            <button id="reset" type="reset">Borrar</button>
            <button ref={sendBtnRef} id="send" type="send">Enviar</button>

        </form>
    );
}

export default Form;
