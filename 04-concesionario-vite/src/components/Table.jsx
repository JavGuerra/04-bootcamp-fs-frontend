const Table = ({ filteredData }) => {

    let code = '';

    if (filteredData) {
        filteredData.forEach((result, index) => {
            code += '<tr>';
            for (const [key, value] of Object.entries(result))
                code += `<td>${ key === '_id' ? index + 1 : value }</td>`;
            code += '</tr>';
        });
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Nº</th>
                    <th>Modelo</th>
                    <th>Fabricante</th>
                    <th>Precio</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody dangerouslySetInnerHTML={{ __html: code }} />
        </table>
    );
}

export default Table;