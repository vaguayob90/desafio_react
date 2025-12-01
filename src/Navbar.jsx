import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white px-4">
      <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>

      <div className="d-flex gap-2">
        <button className="btn btn-outline-light btn-sm">🍕 Home</button>

        {/* Renderizado condicional según el token */}
        {token ? (
          <>
            <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
            <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light btn-sm">🔐 Login</button>
            <button className="btn btn-outline-light btn-sm">🔐 Register</button>
          </>
        )}
      </div>

      {/* Botón Total formateado */}
      <div className="ms-auto">
        <button className="btn btn-outline-info btn-sm">
          🛒 Total: ${total.toLocaleString()}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;