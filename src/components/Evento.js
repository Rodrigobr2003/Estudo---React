import Button from "./evento/Button";

import styles from "../css/Evento.module.css";

function Eventos(props) {
  return (
    <div className={styles.box}>
      <h2>Esta DIV possuí 3 eventos</h2>

      <Button />
    </div>
  );
}

export default Eventos;
