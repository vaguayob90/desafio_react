import React, { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Inicialmente null porque no tenemos datos

  const getPizza = async () => {
    try {
      // Endpoint fijo solicitado en el PDF (p001)
      const res = await fetch('http://localhost:5000/api/pizzas/p001');
      const data = await res.json();
      setPizza(data);
    } catch (error) {
      console.error("Error al traer la pizza:", error);
    }
  };

  useEffect(() => {
    getPizza();
  }, []);


  // Renderizado condicional: Si pizza es null (aún cargando), no mostramos la tarjeta
  if (!pizza) {
    return <div className="text-center mt-5">Cargando pizza...</div>;
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card mb-3" style={{ maxWidth: '800px' }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={pizza.img}
              className="img-fluid rounded-start h-100 object-fit-cover"
              alt={pizza.name}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h1 className="card-title text-capitalize">{pizza.name}</h1>
              <hr />
              <p className="card-text">{pizza.desc}</p>

              <p className="card-text"><strong>Ingredientes:</strong></p>
              <ul className="list-unstyled">
                {pizza.ingredients.map((ing, i) => (
                  <li key={i}>🍕 {ing}</li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center mt-4">
                <h2 className="mb-0">Precio: ${pizza.price.toLocaleString()}</h2>
                <button className="btn btn-dark">Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;