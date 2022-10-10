import React from "react";
// import fetchAPI from "../modules/fechapi";
// import axios from 'axios';


const Table = ({ filterData }) => {

    // TODO bucle para formatear los datos
    // let data = <tr><td>{filterData}</td></tr>;

    let html = '';

    if (filterData) {

        // const url = 'http://localhost:3000/manufacters/';

        for (const resultado of filterData) {

            // let fabricante = resultado.manufacter_cif;
            // let dfn = resultado.manufacter_cif;

            // Consulta la API mediante la ruta y una función callback para
            // obtener los datos del fabricante por cada fila de la tabla.

            // fetchAPI(url + fabricante, (data) => {

            //     // Obtiene datos para mostrar en la columna 'Fabricante' de cada fila.
            //     if (!data.response_filas) {
            //         fabricante = data.result[0].name;
            //         dfn = fabricante + ' • CIF: ' + dfn + ' • ' + data.result[0].address;
            //     }

                // Crea la fila y llena las columnas con los datos de cada producto.
                html += '<tr>';
                for (const valor of Object.values(resultado)) {
                    html += '<td>';
                    // if (resultado.manufacter_cif === valor) {
                    //     html += `<dfn className="dfn" data-title="${dfn}">${fabricante}</dfn>`;
                    // } else {
                        html += valor;
                    // };
                    html += '</td>';
                }
                html += '</tr>';

            // }); // end callback y consultaAPI
        } // end for resultado
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Modelo</th>
                    <th>Fabricante</th>
                    <th>Precio</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody dangerouslySetInnerHTML={{__html: html}} />
        </table>
    )
}

export default Table;