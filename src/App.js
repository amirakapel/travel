import { CartProvider } from 'react-use-cart';
import Footer from './Footer';
import AllHome from './home/AllHome';
import Nav from './Nav';


function App() {
  return (
    <CartProvider >
    <Nav/>
    <AllHome/>
    <Footer/>
    </CartProvider>
  );
}

export default App;
