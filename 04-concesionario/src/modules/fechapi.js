import setSpin from './spin';
import inactiveBtn from "./inactiveBtn";

/**
 * Hace una consulta a la API indicada en la ruta y ejecuta el callback.
 * @param {String} ruta 
 * @param {Function} callback
 * @param {String} tipo
 */
function fetchAPI(ruta, callback, tipo = 'json') {
    inactiveBtn(document.getElementById('send'), true);
    setSpin(true);
    fetch(ruta)
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return tipo === 'json' ? response.json() : response.text();
        })
        .then(data => callback(data))
        .catch(err => console.log(err))
        .finally(() => {
            setSpin(false);
            inactiveBtn(document.getElementById('send'), false);
        });
};

export default fetchAPI;