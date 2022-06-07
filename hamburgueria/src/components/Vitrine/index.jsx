import { Card, Vitrine } from "../style/global";

export default function Estante({ listaProdutos, setCart, cart }) {
  return (
    <Vitrine>
      {listaProdutos.map((produto) => (
        <Card key={produto.id}>
          <figure>
            <img src={produto.img} />
          </figure>
          <div>
            <h3>{produto.name}</h3>
            <span>{produto.category}</span>
          </div>
          <p>R$ {produto.price.toFixed(2).replace(".", ",")}</p>
          <button
            id={produto}
            onClick={() => {
              setCart([cart, produto]);
              console.log(cart);
            }}
          >
            Adicionar
          </button>
        </Card>
      ))}
    </Vitrine>
  );
}
