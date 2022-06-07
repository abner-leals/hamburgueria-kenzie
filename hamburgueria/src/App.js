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
import Estante from "./components/Vitrine";

function App() {
  const [cardapio, setCardapio] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((response) => setCardapio(response))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log("renderizou");

    return () => {
      <>
        <EstiloGlobal />
        <Cabecalho />
        <Container>
          <Estante listaProdutos={cardapio} setCart={setCart} cart={cart} />
          <CartContainer>
            <div className="cart-header">
              <h3>Carrinho de compras</h3>
            </div>
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
                  <button>+</button>
                  <button>-</button>
                  <button>Remover</button>
                </div>
              </CartLi>
            ))}
          </CartContainer>
        </Container>
      </>;
    };
  }, [cart]);
  return (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <Container>
        <Estante listaProdutos={cardapio} setCart={setCart} cart={cart} />
        <CartContainer>
          <div className="cart-header">
            <h3>Carrinho de compras</h3>
          </div>

          <CartVazio>
            <h3>Sua sacola está vazia</h3>
            <span>Adicione itens</span>
          </CartVazio>
        </CartContainer>
      </Container>
    </>
  );
}
export default App;
