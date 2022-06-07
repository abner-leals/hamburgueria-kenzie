import { useEffect, useState } from "react";
import "./App.css";
import Cabecalho from "./components/Header";
import {
  EstiloGlobal,
  Card,
  Vitrine,
  CartLi,
  CartContainer,
  Container,
  CartVazio,
} from "./components/style/global";
import Total from "./components/total";
import Estante from "./components/Vitrine";

function App() {
  const [cardapio, setCardapio] = useState([]);
  const [busca, setBusca] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setCardapio(response))
      .catch((err) => console.log(err));
  }, []);

  const filtro = cardapio.filter(
    (produto) =>
      produto.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(busca) ||
      produto.category
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(busca)
  );

  return (
    <>
      <EstiloGlobal />
      <Cabecalho setBusca={setBusca} busca={busca} />
      <Container>
        <Estante listaProdutos={filtro} setCart={setCart} cart={cart} />
        <CartContainer>
          <div className="cart-header">
            <h3>Carrinho de compras</h3>
          </div>
          {cart.length > 0 ? (
            <>
              {cart.map((produto) => (
                <CartLi key={produto.id}>
                  <figure>
                    <span>1</span>
                    <img src={produto.img} />
                  </figure>
                  <div>
                    <h3>{produto.name}</h3>
                    <span>{produto.category}</span>
                  </div>
                  <div className="botoes">
                    <button
                      onClick={() => {
                        setCart(cart.filter((elem) => elem.id !== produto.id));
                      }}
                    >
                      Remover
                    </button>
                  </div>
                </CartLi>
              ))}
              <Total cart={cart} setCart={setCart} />
            </>
          ) : (
            <CartVazio>
              <h3>Sua sacola está vazia</h3>
              <span>Adicione itens</span>
            </CartVazio>
          )}
        </CartContainer>
      </Container>
    </>
  );
}
export default App;
