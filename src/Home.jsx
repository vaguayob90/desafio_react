import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          {/* Pizza Napolitana [cite: 72] */}
          <div className="col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano", "albahacas"]}
              img="src/assets/pizza-1.jpg"
            />
          </div>

          {/* Pizza Española [cite: 82] */}
          <div className="col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="src/assets/pizza-2.jpg"
            />
          </div>

          {/* Pizza Pepperoni [cite: 88] */}
          <div className="col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="src/assets/pizza-3.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;