import { CartProvider } from 'react-use-cart';
import Footer from './Footer';
import AllHome from './home/AllHome';
import Nav from './Nav';
import Login from './form/Login';


function App() {
  return (
    <CartProvider >
    <Login/>
    </CartProvider>
  );
}

export default App;
