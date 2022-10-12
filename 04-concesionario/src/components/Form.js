import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import inactiveBtn from '../modules/inactiveBtn';
import setSpin from '../modules/spin';

const Form = ({ setData, setStatus, url }) => {

    const [manufacturers, setManufacturers] = useState([]);
    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm();
    const sendBtn = document.getElementById('send');
    const chars = /^[\da-zA-ZÀ-ÿ\u00f1\u00d1\s-]*\S$/;

    const searchAndUpdate = (url) => {
        inactiveBtn(sendBtn, true);
        setSpin(true);
        axios.get(url).then(response => {
            setStatus(response.data.response_code);
            setData(response.data.result);
        });
        setSpin(false);
        inactiveBtn(sendBtn, false);
    }

    useEffect(() => {
        axios.get(url + 'manufacturers/').then(response =>
            setManufacturers(response.data.result));
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
        const params = `?modelo=${data.model}&color=${data.color}&precio=${data.price}&marca=${data.brand}`;
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
                <select className="select" id="brand"
                    {...register('brand')} defaultValue="DEFAULT">
                    <option value="DEFAULT" disabled>--Marca--</option>
                    {manufacturers.map((manufacturer, index) =>
                        <option key={index} value={manufacturer.cif}>{manufacturer.name}</option>)}
                </select>

                {errors.model?.type === 'pattern' && <p>Modelo incorrecto.</p>}
                {errors.color?.type === 'pattern' && <p>Color incorrecto.</p>}
                {errors.price && <p>Precio incorrecto.</p>}

            </div>
            <button id="reset" type="reset">Borrar</button>
            <button id="send"  type="send" >Enviar</button>
        </form>
    )
}

export default Form;