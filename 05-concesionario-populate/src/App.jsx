import { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Paginator from "./components/Paginator";
import Status from "./components/Status";
import Table from "./components/Table";
import Zone from "./components/Zone";
import inactiveBtn from "./modules/inactiveBtn";
import setSpin from "./modules/setSpin";
import axios from "axios";
import useConfig from "./hooks/useConfig";

function App() {
  const { title, footer, url } = useConfig();
  const clear = (value) => (value === undefined ? "" : value.trim());
  const sendBtnRef = useRef(); // document.getElementById('send');

  const [searchData, setSearchData] = useState({});
  const [dataStatus, setStatus] = useState(null);
  const [filteredData, setData] = useState(null);
  const [sortPrice, setSortPrice] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [finalPage, setFinalPage] = useState(1);
  const [totalDocs, setTotalDocs] = useState(null);

  const next = () => setCurrentPage((prev) => (prev === finalPage ? prev : ++prev));
  const prev = () => setCurrentPage((prev) => (prev === 1 ? prev : --prev));

  useEffect(() => {
    const { model, color, price, brand } = searchData;
    const params =
      `&model=${clear(model)}&color=${clear(color)}` +
      `&price=${clear(price)}&brand=${clear(brand)}&sortprice=${sortPrice}`;
    const searchUrl = url + "products?page=" + currentPage + params;

    inactiveBtn(sendBtnRef.current, true);
    setSpin(true);
    axios
      .get(searchUrl)
      .then((response) => {
        setStatus(response.data.response_code); //dataStatus
        setData(response.data.result); //filteredData
        setCurrentPage(response.data.result.page);
        setFinalPage(response.data.result.totalPages);
        setTotalDocs(response.data.result.totalDocs);
      })
      .catch((error) => {
        setStatus(-1); // Devuelve error (-1) a dataStatus
        console.log("Error: ", error.message);
      });
    setSpin(false);
    inactiveBtn(sendBtnRef.current, false);
  }, [sortPrice, searchData, currentPage]);

  return (
    <div className="wysiwyg">
      <Header title={title} />

      <main>
        <section>
          <Form
            url={url}
            setSearchData={setSearchData}
            setSortPrice={setSortPrice}
            setCurrentPage={setCurrentPage}
            sendBtnRef={sendBtnRef}
          />
        </section>

        <section id="status">
          <Status dataStatus={dataStatus} />
        </section>

        <section id="result">
          {dataStatus === 0 && (
            <Table
              filteredData={filteredData}
              sortPrice={sortPrice}
              setSortPrice={setSortPrice}
              setCurrentPage={setCurrentPage}
            />
          )}
        </section>

        <section id="navigation">
          <Paginator
            totalDocs={totalDocs}
            currentPage={currentPage}
            finalPage={finalPage}
            next={next}
            prev={prev}
          />
        </section>
      </main>

      <Footer footer={footer} />
      <Zone />
    </div>
  );
}

export default App;
