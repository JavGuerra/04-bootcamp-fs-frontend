const Table = ({ filteredData }) => {

    let code = '';

    if (filteredData) {
        filteredData.forEach((result, index) => {
            const manufacturer = result.manufacturer.name;
            const address = result.manufacturer.ref.address;
            const cif = result.manufacturer.ref.cif;
            const dfn = `${manufacturer} • CIF: ${cif} • ${address}`;

            code += '<tr>';
            code +=     `<td>${index + 1}</td>`;
            code +=     `<td>${result.name}</td>`;
            code +=     `<td><dfn class="dfn" data-title="${dfn}">`;
            code +=         `${manufacturer}</dfn></td>`;
            code +=     `<td>${result.price}</td>`;
            code +=     `<td>${result.color}</td>`;
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