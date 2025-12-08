import { useState } from 'react';

const LoginPage = () => {
  // 1. Manejo del estado de los inputs
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // 2. Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // 3. Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí iría la lógica para enviar los datos de inicio de sesión (por ejemplo, a una API)
    console.log('Datos de Login:', formData);

    // En un entorno real, aquí validarías las credenciales
    if (formData.email === 'test@pizzaria.com' && formData.password === '123456') {
        alert('Inicio de sesión exitoso!');
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }

    // Limpiar el formulario después del intento
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    // Utilizo las clases de Bootstrap para centrar el contenido
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="card-title text-center mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>

          {/* Campo Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Campo Contraseña */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Botón de Inicio de Sesión */}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-success">Acceder</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;