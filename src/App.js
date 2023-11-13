import Pessoa from "./components/Pessoa";
import DizerNome from "./components/DizerNome";
import Eventos from "./components/Evento";
import Hook from "./components/Hook";
import Render from "./components/Render";
import RenderList from "./components/RenderList";

import "./App.css";

function App() {
  const lista = ["Banana", "Uva", "Melancia", "Morango"];

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

      <Render />

      <RenderList itens={lista} />
    </div>
  );
}

export default App;
