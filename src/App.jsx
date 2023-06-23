import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";

const Titulo = ({ cor, texto, children }) => {
  if (children == null) {
    return <h1 style={{ color: cor }}>{texto}</h1>;
  } else {
    return <h1 style={{ color: cor }}>{children}</h1>;
  }
};

const App = () => {
  let Pagina = Home;

  const { pathname } = window.location;

  if (pathname === "/produtos") {
    Pagina = Produtos;
  }

  return (
    <>
      <Header />
      <Pagina />
    </>
  );
};

export default App;
