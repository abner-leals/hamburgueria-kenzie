export default function Total({ cart, setCart }) {
  return (
    <div className="subtotal">
      <div className="total">
        <span>Total</span>
        <span>
          R$
          {cart
            .reduce((valor_inicial, elem) => {
              valor_inicial += elem.price;
              return parseFloat(valor_inicial);
            }, 0)
            .toFixed(2)
            .replace(".", ",")}
        </span>
      </div>
      <button onClick={() => setCart([])}>Reomver todos</button>
    </div>
  );
}
