import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import NavBar from "./Components/NavBar";
import CategoryNav from "./Components/CategoryNav";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/Footer";
import CartContextProvider from "./Components/CartContext";
import Cart from "./Components/Cart/Cart";



export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Box className="Appshell">
            <NavBar />
            <CategoryNav />
            <Container maxWidth="lg" className="Appcontent">
              <Routes>
                <Route
                  path="/item/:itemId"
                  element={<ItemDetailContainer />}
                />
                <Route
                  path="/category/:itemCategory"
                  element={<ItemListContainer />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element={<ItemListContainer />} />
              </Routes>
            </Container>
            <Footer />
          </Box>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}
