import { Card, Vitrine } from "../style/global";

export default function Estante({ listaProdutos, setCart, cart }) {
  let cartinho = "";
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
            onClick={() => {
              cart.map((prod) => {
                if (prod.id === produto.id) {
                  cartinho = true;
                }
              });

              if (!cartinho) {
                setCart([...cart, { quantidade: 1, ...produto }]);
              }
              cartinho = false;
            }}
          >
            Adicionar
          </button>
        </Card>
      ))}
    </Vitrine>
  );
}
