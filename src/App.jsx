import React from "react";
import FromProps from "./Forms/FromProps";

const Titulo = ({ cor, texto, children }) => {
  if (children == null) {
    return <h1 style={{ color: cor }}>{texto}</h1>;
  } else {
    return <h1 style={{ color: cor }}>{children}</h1>;
  }
};

const App = () => {
  return (
    <>
      <Titulo texto="Meu titulo" cor="red" />
      <Titulo texto="Meu titulo" cor="blue" />
      <Titulo texto="Meu titulo" cor="green" />
      <Titulo cor="yellow">Children</Titulo>
      <Titulo>Children</Titulo>
      <FromProps/>
    </>
  );
};

export default App;
