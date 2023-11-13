import Pessoa from "./components/Pessoa";
import DizerNome from "./components/DizerNome";
import Eventos from "./components/Evento";
import Hook from "./components/Hook";
import Render from "./components/Render";
import RenderList from "./components/RenderList";
import StateLift from "./components/StateLift";
import Perfil from "./components/stateLift/Perfil";

import { useState } from "react";

import "./App.css";

function App() {
  const lista = ["Banana", "Uva", "Melancia", "Morango"];

  const [nome, setNome] = useState();

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

      <StateLift setNome={setNome} />
      <Perfil nome={nome} />
    </div>
  );
}

export default App;
