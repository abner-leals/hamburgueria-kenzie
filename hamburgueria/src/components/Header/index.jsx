import { Header } from "../style/global";
import logo from "../img/logo.svg";

export default function Cabecalho({ busca, setBusca }) {
  return (
    <Header>
      <img src={logo} />
      <div>
        <input type="text" placeholder="Digitar Pesquisa"></input>
        <button>Pesquisar</button>
      </div>
    </Header>
  );
}
