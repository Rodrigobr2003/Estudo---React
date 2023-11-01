import Button from "./evento/Button";

import styles from "../css/Evento.module.css";

function Eventos(props) {
  function metodo1() {
    alert("Este é o método 1!");
  }

  function metodo2() {
    alert("Este é o método 2!");
  }

  function metodo3() {
    alert("Este é o método 3!");
  }

  return (
    <div className={styles.box}>
      <h2>Esta DIV possuí 3 eventos</h2>

      <Button evento={metodo1} />

      <Button evento={metodo2} />

      <Button evento={metodo3} />
    </div>
  );
}

export default Eventos;
