const Status = ({dataStatus}) => {

    const status = (
        (dataStatus === 0) ? 'OK' :
        (dataStatus === 1) ? 'Sin coincidencias' :
        'Error'
    );

    return <p>Estatus: {status}</p>;
}

export default Status;