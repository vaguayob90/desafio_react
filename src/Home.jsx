import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from './pizzas';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          {/* recorremos las pizzas  */}
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