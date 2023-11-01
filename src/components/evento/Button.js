import Styles from "../../css/Evento.module.css";

function Button(props) {
  return (
    <>
      <button onClick={props.evento} className={Styles.btn_metodo}>
        Ativar método!
      </button>
    </>
  );
}

export default Button;
