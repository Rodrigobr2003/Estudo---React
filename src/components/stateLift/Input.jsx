function Input({ setNome }) {
  return (
    <>
      <p>Insira seu nome</p>
      <input type="text" onChange={(e) => setNome(e.target.value)} />
    </>
  );
}

export default Input;
