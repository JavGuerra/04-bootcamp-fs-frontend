import SortIcon from "./SortIcon";

const Table = ({ filteredData, sortPrice, setSortPrice, setCurrentPage }) => {

    let code = '';

    if (filteredData.docs && filteredData.docs.length) {
        filteredData.docs.forEach(result => {
            const manufacturer = result.manufacturer.name;
            const address = result.manufacturer.ref.address;
            const cif = result.manufacturer.ref.cif;
            const dfn = `${manufacturer} • CIF: ${cif} • ${address}`;

            code += '<tr>';
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
                    <th>Modelo</th>
                    <th>Fabricante</th>
                    <th>
                        Precio 
                        <SortIcon
                        order={sortPrice}
                        change={() => {
                            setSortPrice(-sortPrice);
                            setCurrentPage(1);
                        }} 
                        />
                    </th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody dangerouslySetInnerHTML={{ __html: code }} />
        </table>
    );
}

export default Table;