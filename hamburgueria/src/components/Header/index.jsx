import { Header } from "../style/global";
import logo from "../img/logo.svg";

export default function Cabecalho({ busca, setBusca }) {
  return (
    <Header>
      <img src={logo} />
      <div>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          value={busca}
          onChange={(e) => {
            setBusca(
              e.target.value
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
            );
          }}
        ></input>

        <button>Pesquisar</button>
      </div>
    </Header>
  );
}
