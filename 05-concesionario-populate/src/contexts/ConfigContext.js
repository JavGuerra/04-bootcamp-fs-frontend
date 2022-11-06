import { createContext } from "react";

const Config = createContext({
    title: 'Concesionario React',
    footer: 'Por: Javier Guerra',
    url: 'http://localhost:3000/'
});

export default Config;