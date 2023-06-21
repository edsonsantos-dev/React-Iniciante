// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  const valorParaMostrarMensagem = 10000;

  const ativa = {
    color: "green",
    fontWeight: "bolder",
  };

  const inativa = {
    color: "red",
    fontWeight: "bolder",
  };

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{" "}
        <span style={dados.ativa ? ativa : inativa}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </p>
      <p>Total gasto: R$ {total.toFixed(2)}</p>
      {total > valorParaMostrarMensagem && <p>Você está gastando muito.</p>}
    </div>
  );
};

export default App;
