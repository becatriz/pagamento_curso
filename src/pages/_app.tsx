import { Header } from "../components/Header";
import { CartProvider } from "../contexts/CartContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
