import React from "react";

const Produto = ({ nome, propriedades }) => {
  return (
    <div
      style={{
        width: "100%",
        margin: "1rem 0",
        padding: "1rem",
        border: "1px solid",
      }}
    >
      <h4>{nome}</h4>
      <ul>
        {propriedades.map((propriedade, index) => (
          <li key={index}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
