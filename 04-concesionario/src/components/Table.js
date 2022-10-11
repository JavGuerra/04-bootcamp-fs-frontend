import React from "react";

const Table = ({ filterData }) => {

    let code = '';

    if (filterData) {
        for (const resultado of filterData) {
            code += '<tr>';
            for (const valor of Object.values(resultado))
                code += `<td>${valor}</td>`;
            code += '</tr>';
        }
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
            <tbody dangerouslySetInnerHTML={{ __html: code }} />
        </table>
    )
}

export default Table;