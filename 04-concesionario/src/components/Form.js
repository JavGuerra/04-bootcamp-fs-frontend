import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import inactiveBtn from '../modules/inactiveBtn';
import setSpin from '../modules/setSpin';

const Form = ({ setData, setStatus, url }) => {

    const [manufacturers, setManufacturers] = useState([]);
    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm();
    const clear = value => (value === undefined) ? '' : value.trim();
    const chars = /^[\da-zA-ZÀ-ÿ\u00f1\u00d1\s-]*\S$/;
    const sendBtn = document.getElementById('send');

    const searchAndUpdate = url => {
        inactiveBtn(sendBtn, true);
        setSpin(true);
        axios.get(url)
            .then(response => {
                setStatus(response.data.response_code);
                setData(response.data.result);
            })
            .catch(error => {
                setStatus(-1);
                if (error.response) {
                    // La respuesta fue hecha y el servidor respondió con un código 
                    // de estado que esta fuera del rango de 2xx
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
        inactiveBtn(sendBtn, false);
    }

    useEffect(() => {
        axios.get(url + 'manufacturers/')
            .then(response => setManufacturers(response.data.result))
            .catch(error => console.log('Error: ', error.message));
        searchAndUpdate(url + 'products/');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    onreset = () => {
        clearErrors();
        reset({ model: '', color: '', price: '', brand: '' });
        searchAndUpdate(url + 'products/');
    };

    const onSubmit = data => {
        data.brand = (data.brand === 'DEFAULT') ? '' : data.brand;
        const params = `?modelo=${clear(data.model)}&color=${clear(data.color)}`
            + `&precio=${clear(data.price)}&marca=${clear(data.brand)}`;
        searchAndUpdate(url + 'search/' + params);
    };

    return (
        <form name="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="bg">

                <label htmlFor="model" className="sr">Modelo:</label>
                <input type="text" id="model" placeholder="modelo" autoFocus="autofocus"
                    {...register('model', {
                        pattern: chars
                    })} />

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
                <select className="select" id="brand" defaultValue="DEFAULT"
                    {...register('brand')}>
                    <option value="DEFAULT" disabled>--Marca--</option>
                    {manufacturers.map((manufacturer, index) =>
                        <option key={index} value={manufacturer.cif}>{manufacturer.name}</option>)}
                </select>

                {errors.model?.type === 'pattern' && <p>Modelo incorrecto.</p>}
                {errors.color?.type === 'pattern' && <p>Color incorrecto.</p>}
                {errors.price && <p>Precio incorrecto.</p>}

            </div>
            <button id="reset" type="reset">Borrar</button>
            <button id="send" type="send" >Enviar</button>
        </form>
    )
}

export default Form;