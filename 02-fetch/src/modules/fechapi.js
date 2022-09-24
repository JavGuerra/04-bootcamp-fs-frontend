import setSpin from './spin';

/*
Ejemplo de uso tras importar fetchAPI:

const ruta = 'https://<por-aquí-la-ruta-a-la-api>';
const callback = (data) => {
    console.log(data);
    // Aquí otras cosas que deben pasar tras la consulta a la API.
}
fetchAPI(ruta, callback);

La función fetchAPI mantiene visible el spin mientras se realiza la consulta.
*/

/**
 * Hace una consulta a la API indicada en la ruta y ejecuta el callback.
 * @param {String} ruta 
 * @param {Function} callback
 * @param {String} tipo
 */
function fetchAPI(ruta, callback, tipo = 'json') {
    setSpin(true);
    fetch(ruta)
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return tipo === 'json' ? response.json() : response.text();
        })
        .then(data => callback(data))
        .catch(err => console.log(err))
        .finally(setSpin(false));
};

export default fetchAPI;