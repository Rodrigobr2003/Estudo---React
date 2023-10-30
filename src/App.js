import Pessoa from "./components/Pessoa";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Site de Treino</h1>

      <Pessoa
        nome="Rodrigo"
        idade={20}
        sexo="Masculino"
        profissao="Programador"
      />
    </div>
  );
}

export default App;
