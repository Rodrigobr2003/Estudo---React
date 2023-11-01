import { useState } from "react";

import styles from "../css/Evento.module.css";

function Hook() {
  function anunciar() {
    alert(`O usuário ${nome} foi cadastrado com a senha ${senha}`);
  }

  const [nome, setName] = useState();
  const [senha, setSenha] = useState();

  return (
    <div className={styles.box}>
      <h2>useState</h2>

      <form onSubmit={anunciar}>
        <div>
          <label>Nome</label>
          <input onChange={(e) => setName(e.target.value)} type="text"></input>
        </div>

        <div>
          <label>Senha</label>
          <input onChange={(e) => setSenha(e.target.value)} type="text"></input>
        </div>

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Hook;
