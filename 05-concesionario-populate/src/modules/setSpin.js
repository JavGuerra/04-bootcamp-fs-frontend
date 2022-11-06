let spins = 0;
let areSpins = 0;

/**
 * Activa el spin e incrementa el número de spins en función del número
 * de veces que la función es llamada. Una por cada petición a la API.
 * @param {Boolean} status 
 */
function setSpin(status) {
    status ? spins++ : spins--;
    if (status && !areSpins) {
        areSpins = setInterval(checkSpin, 300);
        document.getElementById('zone').showModal();
    }
}

/**
 * Comprueba si el valor de spin esta a cero para desactivar el spin.
 */
function checkSpin() {
    if (!spins) {
        clearInterval(areSpins);
        areSpins = 0;
        document.getElementById('zone').close();
    }
}

export default setSpin;