const Header = () => {
  return (
    <header className="text-center text-white p-5" style={{
      backgroundImage: `url('src/assets/Header.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // filter: 'brightness(0.9)' // Un poco oscuro para que se lea el texto
    }}>
      <div className="container">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        <hr className="w-50 mx-auto" />
      </div>
    </header>
  );
};

export default Header;