import Button from './components/Button.js';
import './assets/css/styles.css';
import './assets/css/spin.css';
import './App.css';

function App() {
  return (
    <>
      <h1 id="title">Pokemons</h1>
      <Button />

      <dialog id="zona">
        <div className="spinner" aria-label="Consultando..."></div>
      </dialog>
    </>
  );
}

export default App;
