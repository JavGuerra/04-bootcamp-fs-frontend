const Status = ({dataStatus}) => {

    dataStatus = Math.round(dataStatus);

    const status = (
        (dataStatus === 0) ? 'OK' :
        (dataStatus === 1) ? 'Sin coincidencias' :
        (dataStatus === 2) ? 'Sin parámetros' :
        'Error' );

    return (
        <p>Estatus: {status}</p>
    )
}

export default Status;