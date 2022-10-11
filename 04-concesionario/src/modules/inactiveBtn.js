/**
 * Activa o desactiva un botón según el estado indicado.
 * @param {Element} boton 
 * @param {Boolean} estatus 
 */
function inactiveBtn(boton, estatus) {
    if (boton) {
        boton.disabled = estatus;
        boton.setAttribute('aria-disabled', estatus);
    }
}

export default inactiveBtn;