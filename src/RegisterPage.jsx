import { useState } from 'react';

const RegisterPage = () => {
  // 1. Manejo del estado de los inputs
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
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

    // Validación simple de contraseñas
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    if (formData.password.length < 6) {
      alert('La constraseña debe tener un largo minino de 6 caracteres')
      return;
    }

    // Aquí iría la lógica para enviar los datos de registro (por ejemplo, a una API)
    console.log('Datos de Registro:', formData);
    alert(`Usuario ${formData.email} registrado con éxito!`);

    // Limpiar el formulario después del envío
    setFormData({
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    // Utilizo las clases de Bootstrap para centrar el contenido
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="card-title text-center mb-4">Registro de Usuario</h2>
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

          {/* Campo Confirmar Contraseña */}
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Botón de Registro */}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">Registrarse</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;