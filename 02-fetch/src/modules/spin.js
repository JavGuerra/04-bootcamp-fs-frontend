/*
Incluir lo siguiente en el App.js:
<dialog id="zona">
    <div className="spinner" aria-label="Consultando..."></div>
</dialog>

Importar 'spin.css' en el App.js. 

Tras importar el módulo allí donde se desee usar, emplear con:
ponSpin(true);  // activar un spin
ponSpin(false); // desactivar un spin
 */

let spins = 0;
let haySpins = 0;

/**
 * Activa el spin e incrementa el número de spins en función del número
 * de veces que la función es llamada. Una por cada petición a la API.
 * @param {Boolean} estatus 
 */
function ponSpin(estatus) {
    estatus ? spins++ : spins--;
    if (estatus && !haySpins) {
        haySpins = setInterval(compruebaSpin, 300);
        document.getElementById('zona').showModal();
    }
}

/**
 * Comprueba si el valor de spin esta a cero para desactivar el spin.
 */
function compruebaSpin() {
    if (!spins) {
        clearInterval(haySpins);
        haySpins = 0;
        document.getElementById('zona').close();
    }
}

export default ponSpin;