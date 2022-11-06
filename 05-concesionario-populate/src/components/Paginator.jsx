const Paginator = ({totalDocs, currentPage, finalPage, next, prev}) => {
    return (
        <div>
            <button disabled={currentPage === 1} onClick={() => prev()}>Anterior</button>

            <span>
                &nbsp;&nbsp;<strong>{totalDocs}</strong> <small>prods.</small>
                &nbsp;&nbsp;•&nbsp;&nbsp; <small>pág.</small> <strong>{currentPage} </strong> 
                <small>de</small> <strong>{finalPage}</strong>&nbsp;&nbsp;
            </span>

            <button disabled={currentPage === finalPage} onClick={() => next()}>Siguiente</button>
        </div>
    );
}

export default Paginator;