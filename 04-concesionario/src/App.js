import { useState } from "react";
import { title, footer, url } from './modules/config';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Status from "./components/Status";
import Table from './components/Table';
import Zone from './components/Zone';
import './assets/css/spin.css';
import './assets/css/styles.css';
import './assets/css/wysiwyg-min.css';

function App() {

  const [dataStatus, setStatus] = useState(null); 
  const [filteredData, setData] = useState(null);

  return (
    <div className="wysiwyg">
      <Header title={title} />

      <main>
        <section>
          <Form setData={setData} setStatus={setStatus} url={url} />
        </section>

        <section id="status">
          <Status dataStatus={dataStatus} />
        </section>

        <section id="result">
          {dataStatus === 0 && <Table filteredData={filteredData} />}
        </section>
      </main>

      <Footer footer={footer} />
      <Zone />
    </div>
  );
}

export default App;
