import { useState } from "react";
import Footer from './components/Footer';
import Form   from './components/Form';
import Header from './components/Header';
import Status from "./components/Status";
import Table  from './components/Table';
import Zone   from './components/Zone';

function App() {

  const [dataStatus, setStatus] = useState(null); 
  const [filteredData, setData] = useState(null);

  return (
    <div className="wysiwyg">
      <Header />

      <main>
        <section>
          {/* Al pasar por props las funciones setStatus y setData al componente
            Form, podemos actualizar las variables 'dataStatus' y 'filteredData'
            desde el hijo (Form), pero los efectos de esa actualización se verán
            en el padre (App), que detecta los cambios en ambas variables y esto
            provoca que se renderize de nuevo App, con sus valores actuales. */}
          <Form setStatus={setStatus} setData={setData} />
        </section>

        <section id="status">
          <Status dataStatus={dataStatus} />
        </section>

        <section id="result">
          { dataStatus === 0 && <Table filteredData={filteredData} /> }
        </section>
      </main>

      <Footer />
      <Zone />
    </div>
  );
}

export default App;
