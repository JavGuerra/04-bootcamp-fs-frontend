import { useState, useEffect, forwardRef } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Form = forwardRef(({ url, setSearchData, setSortPrice, setCurrentPage }, sendBtnRef) => {

    const [manufacturers, setManufacturers] = useState([]);
    const { register, handleSubmit, formState: { errors }, clearErrors, reset } = useForm();
    const chars = /^[\da-zA-ZÀ-ÿ\u00f1\u00d1\s-]*\S$/;

    useEffect(() => {
        axios.get(url + 'manufacturers/')
            .then(response => setManufacturers(response.data.result)) // Fabricantes
            .catch(error => console.log('Error: ', error.message));
    }, []);

    // Botón reset
    onreset = () => {
        clearErrors();
        reset({model: '', color: '', price: '', brand: ''});
        setSearchData({});
        setSortPrice(1);
        setCurrentPage(1);
    };

    // Botón send
    const onSubmit = data => {
        setSearchData({model: data.model, color: data.color, price: data.price, brand: data.brand});
        setSortPrice(1);
        setCurrentPage(1);
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
                        <option key={index} value={manufacturer.name}>
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
})

export default Form;
