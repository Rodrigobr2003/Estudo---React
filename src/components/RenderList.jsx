function RenderList({ itens }) {
  return (
    <div className="box">
      <h2>Render Lista</h2>

      {itens.length > 0 ? (
        itens.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <p>Lista está vazia...</p>
      )}
    </div>
  );
}

export default RenderList;
