function fetchAPI(address, callback, type = 'json') {
    //setSpin(true);
    fetch(address)
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return type === 'json' ? response.json() : response.text();
        })
        .then(data => callback(data))
        .catch(err => console.log(err));
        //.finally(setSpin(false));
};

export default fetchAPI;