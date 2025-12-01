import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-start ps-2">Pizza {name}</h5>
        <hr />
        <p className="card-text text-center text-secondary" style={{ fontSize: '14px' }}>Ingredientes:</p>
        <ul className="list-unstyled text-center text-secondary" style={{ fontSize: '12px' }}>
          {/* Mapeamos los ingredientes para mostrarlos como lista */}
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="card-footer bg-white text-center pb-4">
        <h4 className="fw-bold mb-4">Precio: ${price.toLocaleString()}</h4>
        <div className="d-flex justify-content-evenly">
          <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;