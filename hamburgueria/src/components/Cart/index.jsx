import { useEffect } from "react";
import { CartContainer, CartLi, CartVazio } from "../style/global";

export default function Carrinho({ cart }) {
  useEffect(() => {
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
    </CartContainer>;

    return (
      <CartContainer>
        <div className="cart-header">
          <h3>Carrinho de compras</h3>
        </div>
        <CartVazio>
          <h3>Sua sacola está vazia</h3>
          <span>Adicione itens</span>
        </CartVazio>
      </CartContainer>
    );
  }, [cart]);
}
