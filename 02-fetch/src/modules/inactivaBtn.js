/**
 * Activa o desactiva un botón según el estado indicado.
 * @param {Element} boton 
 * @param {Boolean} estatus 
 */
function inactivaBtn(boton, estatus) {
    boton.disabled = estatus;
    boton.setAttribute('aria-disabled', estatus);
}

export default inactivaBtn;