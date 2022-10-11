TODO Preparar y enviar datos del formulario al servidor.
TODO sin espacios al inicio y final
    // const clear = (value) => (value === undefined) ? '' : value.trim();
TODO si campos vacíos -> desactivar botones

        // const url = 'http://localhost:3000/manufacturers/';

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
                code += '<tr>';
                for (const valor of Object.values(resultado)) {
                    code += '<td>';
                    // if (resultado.manufacter_cif === valor) {
                    //     html += `<dfn className="dfn" data-title="${dfn}">${fabricante}</dfn>`;
                    // } else {
                        code += valor;
                    // };
                    code += '</td>';
                }
                code += '</tr>';

            // }); // end callback y consultaAPI
        } // end for resultado