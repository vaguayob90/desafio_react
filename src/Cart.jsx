import { useState } from 'react';
import { pizzas } from './pizzas'; // Reutilizamos el array para simular el carrito

const Cart = () => {
  // Inicializamos el carrito con las pizzas y una cantidad base de 1 para cada una
  const [cart, setCart] = useState(
    pizzas.map((pizza) => ({ ...pizza, count: 1 }))
  );

  // Función para aumentar cantidad
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setCart(updatedCart);
  };

  // Función para disminuir cantidad y eliminar si es 0
  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count - 1 };
        }
        return pizza;
      })
      .filter((pizza) => pizza.count > 0); // Elimina si count es 0
    setCart(updatedCart);
  };

  // Calcular el total dinámicamente
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="container my-5 w-60">
      <h3 className="mb-4">Detalles del pedido:</h3>
      <div className="bg-light p-3 border rounded">
        {cart.map((pizza) => (
          <div key={pizza.id} className="d-flex justify-content-between align-items-center py-2 border-bottom">
            <div className="d-flex align-items-center gap-2">
              <img src={pizza.img} alt={pizza.name} style={{ width: '50px', borderRadius: '5px' }} />
              <h6 className="mb-0 text-capitalize">{pizza.name}</h6>
            </div>

            <div className="d-flex align-items-center gap-2">
              <span className="text-success fw-bold">${(pizza.price * pizza.count).toLocaleString()}</span>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => decreaseQuantity(pizza.id)}
              >
                -
              </button>
              <span className="fw-bold">{pizza.count}</span>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => increaseQuantity(pizza.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div className="mt-4">
          <h2 className="fw-bold">Total: ${total.toLocaleString()}</h2>
          <button className="btn btn-dark mt-2">Pagar</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;