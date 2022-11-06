/**
 * Activa o desactiva un botón según el estado indicado.
 * @param {Element} button 
 * @param {Boolean} status 
 */
function inactiveBtn(button, status) {
    if (button) {
        button.disabled = status;
        button.setAttribute('aria-disabled', status);
    }
}

export default inactiveBtn;