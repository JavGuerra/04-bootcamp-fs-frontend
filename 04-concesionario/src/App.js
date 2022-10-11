import { useState } from "react";
import {title, footer, url} from './modules/config';
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
  const [filterData, setFilter] = useState(null);

  let status = null;
  let result = null;

  if (!isNaN(dataStatus) && dataStatus >= 0 && dataStatus <= 2) {
    status = <Status dataStatus={dataStatus} />;
    if (dataStatus === 0) result = <Table filterData={filterData} />;
  };

  return (
    <div className="wysiwyg">
      <Header title={title} />
      <main>
        <section>
          <Form setFilter={setFilter} setStatus={setStatus} url={url} />
        </section>
        <section id="status">{status}</section>
        <section id="result">{result}</section>
      </main>
      <Footer footer={footer} />
      <Zone />
    </div>
  );
}

export default App;
