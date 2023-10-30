import styles from "../css/Pessoa.module.css";
import PropsTypes from "prop-types";

function Pessoa({ nome, idade, sexo, profissao }) {
  return (
    <div className={styles.box_pessoa}>
      <h2 className={styles.titulo}>Pessoa:</h2>

      <p className={styles.paragrafo}>
        Nome: <span>{nome}</span>
      </p>

      <p className={styles.paragrafo}>
        Idade: <span>{idade}</span>
      </p>

      <p className={styles.paragrafo}>
        Sexo: <span>{sexo}</span>
      </p>

      <p className={styles.paragrafo}>
        Profissao: <span>{profissao}</span>
      </p>
    </div>
  );
}

Pessoa.propsTypes = {
  nome: PropsTypes.string,
  idade: PropsTypes.number,
  sexo: PropsTypes.string,
  profissao: PropsTypes.string,
};

Pessoa.defaultProps = {
  nome: "Faltou o nome",
  idade: 0,
  sexo: "Faltou o sexo",
  profissao: "Faltou a profissão",
};

export default Pessoa;
