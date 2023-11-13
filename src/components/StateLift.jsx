import Input from "./stateLift/Input";

function StateLift({ setNome }) {
  return (
    <div className="box">
      <h2>StateLift</h2>

      <Input setNome={setNome} />
    </div>
  );
}

export default StateLift;
