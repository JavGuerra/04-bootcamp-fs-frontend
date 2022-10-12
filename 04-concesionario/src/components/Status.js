const Status = ({dataStatus}) => {

    const status = 'Estatus: ' +
    ((!dataStatus) ? 'OK.'
    : (dataStatus === 1) ? 'Sin coincidencias.' : 'Sin parámetros.');

    return (
        <p>{status}</p>
    )
}

export default Status;