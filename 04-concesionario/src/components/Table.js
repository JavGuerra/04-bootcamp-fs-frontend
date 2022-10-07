import React from "react";

const Table = ({filterData}) => {

    // TODO bucle para formatear los datos
    let data = <tr><td>{filterData}</td></tr>;

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
            <tbody>
                {data}
            </tbody>
        </table>
    )
}

export default Table;