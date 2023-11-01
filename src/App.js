import Pessoa from "./components/Pessoa";
import DizerNome from "./components/DizerNome";
import Eventos from "./components/Evento";
import Hook from "./components/Hook";

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

      <DizerNome nome={"Rodrigo"} idade={20} sexo="Masculino" />

      <Eventos />

      <Hook />
    </div>
  );
}

export default App;
