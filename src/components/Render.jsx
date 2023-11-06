import { useState } from "react";

import styles from "../css/Evento.module.css";

function Render() {
  const [filme, setFilme] = useState();
  const [filmeProcurado, setFilmProc] = useState();

  function envia() {
    setFilmProc(filme);
  }

  return (
    <div className={styles.box}>
      <h2>Render & useState</h2>

      <form>
        <div>
          <label>Filme</label>
          <input type="text" onChange={(e) => setFilme(e.target.value)} />
        </div>
      </form>

      <button type="submit" onClick={envia}>
        Enviar filme
      </button>

      {filmeProcurado && <p>O filme que voce procurou é: {filme}</p>}
    </div>
  );
}

export default Render;
