const Table = ({ filteredData }) => {

    let code = '';

    if (filteredData) {
        for (const result of filteredData) {
            code += '<tr>';
            for (const value of Object.values(result))
                code += `<td>${value}</td>`;
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