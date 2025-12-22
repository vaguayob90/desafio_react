import React, { useState, useEffect } from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/pizzas');
      const data = await res.json();
      setPizzas(data); // Guardamos la respuesta en el estado
    } catch (error) {
      console.error("Error al obtener las pizzas:", error);
    }
  };

  // 2. useEffect para consumir la API al montar el componente
  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          {/* Mapeamos el estado 'pizzas' que ahora viene de la API */}
          {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;