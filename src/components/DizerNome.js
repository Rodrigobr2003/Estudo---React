import "../css/DizerNome.module.css";

function DizerNome({ nome, idade, sexo }) {
  function print() {
    alert(`
    Nome: ${nome}
    Idade: ${idade}
    Sexo: ${sexo}`);
  }

  return (
    <div>
      <button onClick={print}>Dizer nome!</button>
    </div>
  );
}

export default DizerNome;
