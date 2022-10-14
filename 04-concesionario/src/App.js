import { useState, useContext } from "react";
import Config from './contexts/ConfigContext';
import Footer from './components/Footer';
import Form   from './components/Form';
import Header from './components/Header';
import Status from "./components/Status";
import Table  from './components/Table';
import Zone   from './components/Zone';
import './assets/css/spin.css';
import './assets/css/styles.css';
import './assets/css/wysiwyg-min.css';

function App() {

  const { title, footer, url  } = useContext(Config);
  const [dataStatus, setStatus] = useState(null); 
  const [filteredData, setData] = useState(null);

  return (
    <div className="wysiwyg">
      <Header title={title} />

      <main>
        <section>
          {/* Al pasar por props las funciones setStatus y setData al componente
            Form, podemos actualizar las variables 'dataStatus' y 'filteredData'
            desde el hijo (Form), pero los efectos de esa actualización se verán
            en el padre (App), que detecta los cambios en ambas variables y esto
            provoca que se renderize de nuevo App con sus valores actuales.  */}
          <Form url={url} setStatus={setStatus} setData={setData} />
        </section>

        <section id="status">
          <Status dataStatus={dataStatus} />
        </section>

        <section id="result">
          { dataStatus === 0 && <Table filteredData={filteredData} /> }
        </section>
      </main>

      <Footer footer={footer} />
      <Zone />
    </div>
  );
}

export default App;
