import Rotas from "./Perfil/Rotas";

function Perfil({ nome }) {
  return (
    <>
      {nome && (
        <div className="box">
          <h2>Seja bem-vindo {nome}!</h2>

          <Rotas />
        </div>
      )}
    </>
  );
}

export default Perfil;
