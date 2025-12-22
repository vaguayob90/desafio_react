import Navbar from './Navbar';
// import Home from './Home';
// import RegisterPage from './RegisterPage';
// import LoginPage from './LoginPage';
// import Cart from './Cart';
import Pizza from './Pizza';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 min-vw-100">
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </div>
  );
}

export default App;